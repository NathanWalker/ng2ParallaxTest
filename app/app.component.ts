import {Component, OnInit, Input } from 'angular2/core';

@Component({
	selector: 'parallax-view',
	template: `
		<Parallax controlsToFade="headerLabel,headerLabel2">
			<Header class="header-template">
				<Label id="headerLabel" text="Parallax"></Label>
				<Label id="headerLabel2" text="Component"></Label>
			</Header>
			<Content class="body-template">
				<TextView editable="false" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque, est in viverra vehicula, enim lacus fermentum mi, vel tincidunt libero diam quis nulla. In sem tellus, eleifend quis egestas at, ultricies a neque. Cras facilisis lacinia velit ut lacinia. Phasellus fermentum libero et est ultricies venenatis sit amet ac lectus. Curabitur faucibus nisi id tellus vehicula luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc condimentum est id nibh volutpat tempor. Phasellus sodales velit vel dui feugiat, eget tincidunt tortor sollicitudin. Donec nec risus in purus interdum eleifend. Praesent placerat urna aliquet orci suscipit laoreet. In ac purus nec sapien rhoncus egestas.

				Ut at consequat libero, at pharetra purus. Integer mi lorem, luctus eget porttitor vitae, pharetra et urna. Morbi et euismod lacus. Vestibulum a massa odio. Aenean at neque hendrerit, consequat sem et, congue mi. Sed egestas, ante feugiat lacinia tempus, lacus lorem laoreet magna, a hendrerit augue leo vitae risus. Integer ornare odio nec libero elementum malesuada. Cras sem sapien, aliquet eget nibh molestie, finibus dictum augue. Nulla mi metus, finibus id arcu nec, molestie venenatis libero. Morbi a pharetra odio. Maecenas viverra, quam at sollicitudin sodales, diam purus lacinia dolor, vitae scelerisque erat mi nec nibh. Quisque egestas et nunc in pharetra. Sed vitae tincidunt justo, dictum tincidunt nisi. Quisque tempus dolor urna, et mattis velit porta vitae.">
				</TextView>
			</Content>
		</Parallax>
			`,
	styles: [`
		#headerLabel2
		{
			font-size: 45;
			horizontal-align: center;
			margin-top:-25;
			color:#B2EBF2;
		}
		#headerLabel{
			font-size: 45;
			horizontal-align: center;
			padding-top:75;
			color:#B2EBF2;
		}
		.header-template{
			background-color:#212121;
			background-image:url('~/images/mountains.png');
			background-size: cover;
			height: 200;
		}
		.body-template TextView{
			font-size:20;
			padding:5 15;
			border:none;
		}
		.anchor{
			height: 55;
			width:100%;
			background-color:#616161;
		}
		#titleLabel{
			font-weight:bold;
			font-size:25;
			padding:5 15;
			color:#fff;
		}
	`]
})
export class ParallaxPage implements OnInit {



	constructor() {

	}
	ngOnInit() {

	}
}