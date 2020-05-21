const { succeed, fail, repair } = require('./enhancer.js');
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
        test('if enhancement level is 20 or greater, success returns 20', () => {
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
        test('if enhancement level is less than 0, success returns to 0', () => {
            let item = {
                name: 'negatively enhanced sword',
                durability: 0,
                enhancement: -20
            };
            expect(succeed(item)).toBe(0);
        });
    });
});

describe('enhancer', () => {
    describe('fail()', () => {
        test('if enhancement level is less than 15 and durability is less than 5, fail returns durability to 0', () => {
            let item = {
                name: 'broken sword',
                durability: 4,
                enhancement: 4
            };
            expect(fail(item)).toBe(0);
            console.log(item)
        });
    });
});

describe('enhancer', () => {
    describe('fail()', () => {
        test('if enhancement level is less than 15 and durability is greater than 5, fail returns durability to minus 5', () => {
            let item = {
                name: 'weak sword',
                durability: 41,
                enhancement: 7
            };
            expect(fail(item)).toBe(36);
            expect(fail(item)).toBe(item.durability - 5)
            console.log(item)
        });
    });
});

describe('enhancer', () => {
    describe('fail()', () => {
        test('if enhancement level is equal to 15 and durability is greater than 10, fail returns durability minus 10', () => {
            let item = {
                name: 'solid sword',
                durability: 70,
                enhancement: 15
            };
            expect(fail(item)).toBe(60);
            console.log(item)
        });
    });
});

describe('enhancer', () => {
    describe('fail()', () => {
        test('if enhancement level is equal to 15 and durability is less than 10, fail returns durability minus 0', () => {
            let item = {
                name: 'sword NEED repaired',
                durability: 7,
                enhancement: 15
            };
            expect(fail(item)).toBe(0);
            console.log(item)
        });
    });
});

describe('enhancer', () => {
    describe('fail()', () => {
        test('if enhancement level is equal to 15 and durability is less than 10, fail returns durability minus 0', () => {
            let item = {
                name: 'great sword',
                durability: 95,
                enhancement: 18
            };
            expect(fail(item)).toBe(85, 17);
            console.log(item)
        });
    });
});

describe('enhancer', () => {
    describe('fail()', () => {
        test('if enhancement level is equal to 15 and durability is less than 10, fail returns durability minus 0', () => {
            let item = {
                name: 'great sword',
                durability: 8,
                enhancement: 19
            };
            expect(fail(item)).toBe(0, 18);
            console.log(item)
        });
    });
});

describe('enhancer', () => {
    describe('repair()', () => {
        test('repair returns item with durability of 100', () => {
            let item = {
                name: 'scimitar',
                durability: 8,
                enhancement: 19
            };
            expect(repair(item)).toBe(100);
            console.log(item)
        });
    });
});

describe('enhancer', () => {
    describe('repair()', () => {
        test('repair returns item with durability of 100, even if somehow the durability is negative', () => {
            let item = {
                name: 'ethereal scimitar',
                durability: -38,
                enhancement: 7
            };
            expect(repair(item)).toBe(100);
            console.log(item)
        });
    });
});

describe('enhancer', () => {
    describe('repair()', () => {
        test('repair returns item with durability of 100, even if somehow the durability is greater than 100', () => {
            let item = {
                name: 'ethereal scimitar',
                durability: 9000,
                enhancement: 12
            };
            expect(repair(item)).toBe(100);
            console.log(item)
        });
    });
});





