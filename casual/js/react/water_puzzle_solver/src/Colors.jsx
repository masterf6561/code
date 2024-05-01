export const Colors = (props) => {
    const colors = { ...props.colors };
    const onClick = props.onClick;

    Object.keys(colors).forEach(color => {
        const currentColorBox = document.getElementById(`${color}_box`);
        if (currentColorBox) {
            currentColorBox.style.backgroundColor = colors[color];
        }
    })
    return (
        <div className="colorBoxes">
            {
                Object.keys(colors).map((color) => {
                    return (
                        <button id={`${color}_box`} 
                            key={`${color}_box`} 
                            className={`water button`}
                            onClick={() => onClick(color)}
                        >
                            {color}
                        </button>
                    )
                })
            }

        </div>
    )
}
