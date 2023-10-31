'use client'
import { Highlight, themes } from 'prism-react-renderer'

const codeBlock = `
const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
}
`

const CareersCodes = () => {
  return (
    <div>
      <Highlight theme={themes.shadesOfPurple} code={codeBlock} language="tsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div style={style} className="mockup-code">
            {tokens.map((line, i) => (
              <pre key={i} {...getLineProps({ line })} data-prefix={i + 1}>
                {/* <span>{i + 1}</span> */}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </pre>
            ))}
          </div>
        )}
      </Highlight>
    </div>
  )
}
export default CareersCodes
