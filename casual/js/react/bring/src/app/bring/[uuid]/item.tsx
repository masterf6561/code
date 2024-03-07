interface ItemProps {
  name: string,
  specification: string,
}

export const Item = ({Item}: ItemProps) => {
  return(
    
      <div
        className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"
        >
          <h2 className={`mb-3 text-md font-semibold`}>
            {Item.name}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
            {Item.specification}
          </p>
        </div>
      )
}
