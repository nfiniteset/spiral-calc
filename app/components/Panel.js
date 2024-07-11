import React from 'react';

function Panel({ children, className }, props) {
    return (
        <div {...props} className={"p-6 " + className}>
            <div className="h-full p-4 bg-gray-200 rounded-lg overflow-scroll">
                {children}
            </div>
        </div>
    );
}

export default Panel;