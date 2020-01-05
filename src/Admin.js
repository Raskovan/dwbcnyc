import React, { useState } from 'react'
import traverse, { wrapRender, transformComponents } from 'react-traverse'

function Admin(props) {
	const { textArray, imageArray } = props
	const [myState, setState] = useState({})

	let changeValue = e => {
		console.log(e.target.value)
		setState({
			...myState,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = e => {
		// console.log(myState[e.target.id][e.target.name])
		// console.log(e.target.id)
		e.preventDefault()
	}

	let keyCount = 11

	const replacePsWithInputs = node =>
		traverse(node, {
			DOMElement(path) {
				// if (path.node.type === 'form') console.log('Orig', path.node)
				if (
					path.node.type === 'p' ||
					(path.node.type === 'form' && path.node.props.children)
				) {
					// console.log('P', path.node)
					// console.log(path.node.props.dangerouslySetInnerHTML.__html)
					const inputProps = {
						key: '.0',
						className: path.node.props.className,
						name: path.node.props.className,
						rows:
							path.node.props.children &&
							typeof path.node.props.children === 'string' &&
							path.node.props.children.length > 200
								? 10
								: 2,
						cols:
							path.node.props.children &&
							typeof path.node.props.children === 'string' &&
							path.node.props.children.length > 30
								? 150
								: 30,
						defaultValue: path.node.props.children,
						onChange: e => changeValue(e)
					}
					const textArea = React.createElement('textarea', inputProps)
					const submit = React.createElement('input', {
						key: '.1',
						type: 'submit',
						value: 'Save'
					})
					const form = React.createElement('form', {
						className: path.node.props.className,
						key: path.node.key,
						children: [textArea, submit],
						onSubmit: e => handleSubmit(e)
					})
					keyCount++
					// console.log('myForm', form)
					return form
				}
				keyCount++
				return React.cloneElement(
					path.node,
					path.node.props,
					...path.traverseChildren()
				)
			}
		})

	const origWithProps = React.cloneElement(
		props.nodes({
			imageArray: imageArray,
			textArray: textArray
		})
	)
	const replaced = wrapRender(replacePsWithInputs)(
		props.nodes({
			imageArray: imageArray,
			textArray: textArray
		})
	)
	console.log('>>>>', React.createElement(replaced))

	const updatedNodes = transformComponents(wrapRender(replacePsWithInputs))(
		origWithProps
	)
	console.log('>', origWithProps)
	return updatedNodes
}

export default Admin
