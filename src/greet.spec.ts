import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
    it('should return default greeting with name', () => {
        expect(greet('John')).toBe('Hello, John!');
    });

    it('should return custom greeting with name', () => {
        expect(greet('John', 'Hi')).toBe('Hi, John!');
    });

    it('should handle empty name', () => {
        expect(greet('')).toBe('Hello, !');
    });

    it('should handle empty greeting', () => {
        expect(greet('John', '')).toBe('Hello, John!');
    });

    it('should handle special characters in name', () => {
        expect(greet('John@123')).toBe('Hello, John@123!');
    });

    it('should handle special characters in greeting', () => {
        expect(greet('John', 'Hello!!!')).toBe('Hello!!!, John!');
    });

    it('should handle whitespace in name', () => {
        expect(greet('   John   ')).toBe('Hello,    John   !');
    });

    it('should handle whitespace in greeting', () => {
        expect(greet('John', '   Hi   ')).toBe('   Hi   , John!');
    });

    it('should handle undefined greeting', () => {
        expect(greet('John', undefined)).toBe('Hello, John!');
    });
});
