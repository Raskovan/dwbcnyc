import React, { useState, useRef, createRef } from 'react'
import traverse, { wrapRender, transformComponents } from 'react-traverse'

function Admin(props) {
	const { textArray, imageArray } = props
	const [myState, setState] = useState()

	const changeValue = e => {
		console.log('CHANGE', { [e.target.id]: e.target.innerText })
		// setState(e.target.innerText)
	}

	const focusInput = elementsRef => {
		console.log('focusInput', elementsRef.target)
	}

	const handleSubmit = e => {
		// console.log(myState[e.target.id][e.target.name])
		// console.log(e.target.id)
		e.preventDefault()
	}

	let keyCount = 0
	let allNodesToChange = []

	const replacePsWithInputs = node =>
		traverse(node, {
			DOMElement(path) {
				keyCount++
				if (path.node.type === 'form') console.log('Orig', path.node)
				if (path.node.type === 'p') {
					const elementsRef = createRef()
					// allNodesToChange.push(elementsRef)
					console.log('ORIGIN', path.node)
					const fieldId =
						path.node._owner.stateNode &&
						path.node._owner.stateNode.props &&
						path.node._owner.stateNode.props.text &&
						path.node._owner.stateNode.props.text.fields
							? path.node._owner.stateNode.props.text.fields.name
							: null
					console.log(fieldId)
					const elementCopy = React.createElement('p', {
						...path.node.props,
						key: path.node.key,
						contentEditable: true,
						id: fieldId,
						// defaultValue: path.node.props.children,
						onInput: e => changeValue(e)
					})
					// elementCopy.props.contentEditable = true
					// console.log('ORIG', path)
					console.log('COPY', elementCopy)
					// console.log('P', path.node)
					// console.log(path.node.props.dangerouslySetInnerHTML.__html)
					const inputProps = {
						key: '.0',
						className: path.node.props.className,
						name: path.node.props.className + keyCount,
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
						onChange: e => changeValue(e),
						onClick: elementsRef => focusInput(elementsRef)
					}
					const textArea = React.createElement('textarea', {
						...inputProps,
						ref: elementsRef
					})
					const submit = React.createElement('input', {
						key: '.1',
						type: 'submit',
						value: 'Save'
					})
					const form = React.createElement(
						'form',
						{
							className: path.node.props.className,
							key: path.node.key,
							onSubmit: e => handleSubmit(e)
						},
						textArea,
						submit
					)
					keyCount++
					return elementCopy
				}
				keyCount++
				return React.cloneElement(
					path.node,
					path.node.props,
					...path.traverseChildren()
				)
			}
		})

	// const origWithProps = React.cloneElement(
	// 	props.nodes({
	// 		imageArray: imageArray,
	// 		textArray: textArray
	// 	})
	// )
	// const replaced = wrapRender(replacePsWithInputs)(
	// 	props.nodes({
	// 		imageArray: imageArray,
	// 		textArray: textArray
	// 	})
	// )
	// console.log('>>>>', React.createElement(replaced))

	const updatedNodes = transformComponents(wrapRender(replacePsWithInputs))(
		props.nodes
	)
	// console.log('>', props.nodes)
	return updatedNodes
}

export default Admin
