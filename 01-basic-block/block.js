const { __, setLocaleData } = wp.i18n;
const { registerBlockType } = wp.blocks;

const blockStyle = {
	backgroundColor: '#900',
	color: '#fff',
	padding: '20px',
};

// my-plugin/block-name
registerBlockType( 'block-examples/block-examples-01-basic-block', {
	title: __( 'Basic Block', 'block-examples' ),
	icon: 'universal-access-alt',
	category: 'layout',
	// used in editor
	edit() {
		return <div style={ blockStyle }> Testing the Basic example with JSX!</div>;
	},
	// used in front end
	save() {
		return <div style={ blockStyle }>Basic example with JSX!</div>;
	},
} );