import { greet } from './greet';

describe('greet', () => {
    it('should include name in the message', () => {
        expect(greet("mosh")).toContain('mosh');
    })
})