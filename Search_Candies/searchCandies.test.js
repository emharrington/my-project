const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
    it('return Mars & Maltesers', () => {
        expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
    });

    it('return Mars', () => {
        expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ]);
    });

    it('return Skitties, Skittles & Starburst', () => {
        expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
    });

    it('return Skitties & Skittles', () => {
        expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
    });

    it('return Mars & Maltesers', () => {
        expect(searchCandies('ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
    });
});