import React, { useState } from 'react';
import './Ruler.css';

const Ruler = ({ orientation }) => {
    const [highlightedNumber, setHighlightedNumber] = useState(null);

    // A helper function to generate the ruler markings
    const generateRulerMarks = () => {
        const marks = [];
        for (let i = 1; i <= 20; i++) {
            marks.push(
                <>
                    <div
                        key={i}
                        className={`ruler-mark ${orientation}`}>
                    </div>
                    <div
                        className={`ruler-mark-mid ${orientation} ${highlightedNumber === i ? ' highlighted' : ''}`}
                        onMouseEnter={() => setHighlightedNumber(i)}
                        onMouseLeave={() => setHighlightedNumber(null)}
                    >
                        <span className={`ruler-number ${orientation}`}>{i}</span>
                    </div>
                </>

            );
        }
        return marks;
    };

    return (
        <div className={`ruler ${orientation}`}>
            <div className={`marks ${orientation}`}>

                {generateRulerMarks()}

            </div>
        </div>
    );
};

export default Ruler;
