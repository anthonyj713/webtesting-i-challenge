const { succeed } = require('./enhancer.js');
// test away!


describe('enhancer', () => {
    describe('succeed()', () => {
        test('enhancement succeeds between 0-20', () => {
            let item = {
                name: 'sword',
                durability: 0,
                enhancement: 7
            };
            expect(succeed(item)).toBe(8);
           expect(succeed(item)).toBe(item.enhancement + 1);
         });
    });
});

describe('enhancer', () => {
    describe('succeed()', () => {
        test('if enhancement level is 20 or greater, it stays at 20', () => {
            let item = {
                name: 'hacked sword',
                durability: 0,
                enhancement: 21
            };
            expect(succeed(item)).toBe(20);
            expect(succeed(item)).toBe(item.enhancement);
        });
    });
});

describe('enhancer', () => {
    describe('succeed()', () => {
        test('if enhancement level is less than 0, it returns to 0', () => {
            let item = {
                name: 'negatively enhanced sword',
                durability: 0,
                enhancement: -20
            };
            expect(succeed(item)).toBe(0);
        });
    });
});

