const { __, setLocaleData } = wp.i18n;
const { registerBlockType } = wp.blocks;
const{ RichText, BlockControls, AlignmentToolbar } = wp.editor;

// my-plugin/block-name
registerBlockType( 'block-examples/block-examples-04-block', {
	title: __( 'Controls Block', 'block-examples' ),
	icon: 'universal-access-alt',
	category: 'layout',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'h1'
		},
		alignment: {
			type: 'string'
		}
	},
	edit: ({ className, attributes: { content, alignment }, setAttributes }) => {
		const onChangeContent = content => {
			setAttributes( { content: content } );
		}

		const onChangeAlignment = newAlignment => {
			setAttributes( { alignment: newAlignment } );
		}
		
		return [
			<BlockControls>
				<AlignmentToolbar
					value={ alignment }
					onChange={ onChangeAlignment }
				/>
			</BlockControls>,
			<RichText
				tagName="h1"
				className={ className }
				onChange={ onChangeContent }
				value={ content }
				style={ { textAlign: alignment } }
			/>
		]
	},
	// used in front end
	save: ({ className, attributes: { content, alignment } }) => {
		return(
			<RichText.Content
				tagName="h1"
				className={ className }
				value={ content }
				style={ { textAlign: alignment } }
			/>
		);
	},
} );