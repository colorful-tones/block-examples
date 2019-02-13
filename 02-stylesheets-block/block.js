const { __, setLocaleData } = wp.i18n;
const { registerBlockType } = wp.blocks;

// my-plugin/block-name
registerBlockType( 'block-examples/block-examples-02-stylesheets-block', {
	title: __( 'Stylesheets Block', 'block-examples' ),
	icon: 'universal-access-alt',
	category: 'layout',
	// used in editor
	edit: ( { className } ) => {
		return(
			<p className={ className }>
				{ __( 'Hello world, this is the 02 example block.') }
			</p>
		);
	},
	// used in front end
	save: ( { className } ) => {
		return(
			<p className={ className }>
				{ __( 'Hello world, this is the 02 example block in pink.') }
			</p>
		);
	},
} );