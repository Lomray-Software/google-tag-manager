import { expect } from 'chai';
import sinon from 'sinon';
import { describe, it, afterEach } from 'vitest';
import Manager from '../src/manager';

describe('Manager', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('should create manager instance', () => {
    const manager = new Manager();

    expect(manager).to.instanceof(Manager);
  });
});
