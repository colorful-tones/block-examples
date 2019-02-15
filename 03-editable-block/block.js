const { __, setLocaleData } = wp.i18n;
const { registerBlockType } = wp.blocks;
const{ RichText } = wp.editor;

// my-plugin/block-name
registerBlockType( 'block-examples/block-examples-03-block', {
	title: __( 'Editable Block', 'block-examples' ),
	icon: 'universal-access-alt',
	category: 'layout',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p'
		}
	},
	edit: ( props ) => {
		const onChangeContent = content => {
			props.setAttributes( { content: content } );
		}
		
		return(
			<RichText
				tagName="p"
				className={ props.className }
				onChange={ onChangeContent }
				value={ props.attributes.content }
			/>
		);
	},
	// used in front end
	save: ( props ) => {
		return(
			<RichText.Content
				tagName="p"
				className={ props.className }
				value={ props.attributes.content }
			/>
		);
	},
} );