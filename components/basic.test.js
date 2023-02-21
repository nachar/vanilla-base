import { describe, expect, it, beforeEach } from 'vitest'
import { addItems, subtractItems } from "./basic.js";

describe('Basic', () => {
  it('Add items ', () => {
    expect(addItems(10, 5)).eq(15);
  });
  it('Subtract items ', () => {
    expect(subtractItems(10, 5)).eq(5);
  });
});
