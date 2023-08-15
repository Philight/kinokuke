
const HeadingUnderline = (props) => {
	let { color } = props;
	return (
		<canvas className="underline__container" style={{backgroundColor: color}}></canvas>
	)
}

export default HeadingUnderline;