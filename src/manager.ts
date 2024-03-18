interface IGoogleTagManagerInit {
  gtmId: string;
  // improve lighthouse performance (3000 ms)
  initDelay?: number;
  skipNoscript?: boolean; // e.g. custom inserting
}

declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Window {
    dataLayer: {
      push: (data: Record<string, any>) => void;
    };
  }
}

/**
 * Insert GTM scripts on page
 */
class GoogleTagManager {
  /**
   * Is initialized GTM module
   */
  private isInitialized = false;

  /**
   * Initialize gtm module on page
   */
  public init({ gtmId, initDelay = 0, skipNoscript = false }: IGoogleTagManagerInit): void {
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      // this part ensures PageViews is always tracked
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'gtm.js',
        'gtm.start': Date.now(),
        'gtm.uniqueEventId': 0,
      });
    };
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}&gtm_cookies_win=x`;

    const iframe = document.createElement('iframe');

    iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}&gtm_cookies_win=x`;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    iframe.id = 'tag-manager';
    const noscript = document.createElement('noscript');

    noscript.appendChild(iframe);

    const init = (): void => {
      if (this.isInitialized) {
        return;
      }

      document.head.appendChild(script);

      if (!skipNoscript) {
        document.body.insertBefore(noscript, document.body.childNodes[0]);
      }

      this.isInitialized = true;
    };

    if (!initDelay) {
      init();
    } else {
      const events = ['DOMContentLoaded', 'scroll', 'mousemove', 'touchstart'];
      const delayInitFunc = (event: Event) => {
        const isDomLoadedEvent = event.type === 'DOMContentLoaded';

        setTimeout(init, isDomLoadedEvent ? initDelay : 0);

        if (!isDomLoadedEvent) {
          events.forEach((eventName) => {
            document.removeEventListener(eventName, delayInitFunc);
          });
        }
      };

      events.forEach((eventName) => {
        document.addEventListener(eventName, delayInitFunc);
      });
    }
  }

  /**
   * Push gtm event
   */
  public pushEvent(data: Record<string, any>): void {
    if (typeof window !== 'undefined' && window?.dataLayer) {
      window.dataLayer.push(data);
    }
  }
}

export default GoogleTagManager;
