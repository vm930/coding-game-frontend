var chickenContainer = document.getElementById('chicken-container');

// Matter module aliases
var Engine = Matter.Engine,
	World = Matter.World,
	Body = Matter.Body,
	Bodies = Matter.Bodies,
	Common = Matter.Common,
	Composites = Matter.Composites,
	MouseConstraint = Matter.MouseConstraint;

// window height and width
var width = 650;
var height = 200;

// create a Matter.js engine
var engine = Engine.create(chickenContainer, {
	render: {
		options: {
			showAngleIndicator: true,
			wireframes: false,
			background: 'transparent',
			width: width,
			height: height
		}
	}
});

// add a mouse controlled constraint
var mouseConstraint = MouseConstraint.create(engine, {
	constraint: {
		render: {
			visible: false
		}
	}
});
World.add(engine.world, mouseConstraint);

var offset = 10,
	options = {
		isStatic: true,
		render: {
			visible: true
		}
	};

engine.world.bodies = [];

// these static walls will not be rendered in this sprites example, see options
World.add(engine.world, [
	Bodies.rectangle(width / 2, height - offset, width, offset, options), // bottom
	Bodies.rectangle(width, height / 2, offset, height, options), //right
	Bodies.rectangle(0, height / 2, offset, height, options), //left

	Bodies.rectangle(0, -300, width, 15, { isStatic: true, render: { visible: true }, angle: Math.PI * 0.2 }),
	Bodies.rectangle(width / 10 * 10, -300, width, 15, {
		isStatic: true,
		render: { visible: true },
		angle: Math.PI * -0.2
	})
]);

var stack = Composites.stack(350, 40, 5, 20, 20, 20, function(x, y, column, row) {
	return Bodies.circle(x, y, Common.random(25, 25), {
		restitution: 0.2,
		render: {
			sprite: {
				texture: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/180245/hen.svg'
			}
		},
		position: {
			y: -250
		}
	});
});

World.add(engine.world, stack);

var renderOptions = engine.render.options;

// run the engine
Engine.run(engine);

World.add(engine.world, stack);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
