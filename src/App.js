import React from 'react'

import {
    CodePane,
    CodeSpan,
    Deck,
    FlexBox,
    FullScreen,
    Heading,
    Image,
    Link,
    ListItem,
    Notes,
    Progress,
    Quote,
    Slide,
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
    Text,
    UnorderedList,
} from 'spectacle'

// SPECTACLE_CLI_THEME_START
const theme = {
    fonts: {
        header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
        text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    },
    colors: {
        primary: 'white',
        secondary: '#FB5252',
        tertiary: '#000000',
        quaternary: 'white',
        quinary: '#9d4f10',
    },
    fontSizes: {
        header: '64px',
        text: '42px',
        code: '38px',
        tiny: '24px',
    },
    size: {
        maxCodePaneHeight: 450,
    },
    space: {
        none: 0,
        tiny: 6,
    },
}
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
    <FlexBox>
        <FlexBox position="absolute" alignItems="center" bottom={0} width={1}>
            <Progress/>
        </FlexBox>
        <FlexBox position="absolute" right={0} bottom={0}>
            <FullScreen/>
        </FlexBox>
    </FlexBox>
)
// SPECTACLE_CLI_TEMPLATE_END

const App = () => (
    <Deck theme={theme} template={template} transitionEffect="fade">
        <Slide>
            <FlexBox height="100%" flexDirection="column">
                <Image src={`${process.env.PUBLIC_URL}/images/alive-kitten.png`} width="18%"/>
                <Image src={`${process.env.PUBLIC_URL}/images/warning-sign.png`} width="10%" position="absolute"
                       left="34%" top="32%"/>
                <Heading>FINITE STATE MACHINES</Heading>
            </FlexBox>
            <Notes>
                <Text>
                    A travel through FSM means dealing with stuff like Lambda Calculus, Turing and his machine, Regular
                    Expressions, ATM and so on. All those concepts and applications have to do directly or indirectly
                    with state machine.
                </Text>
                <Text color="secondary">Contents:</Text>
                <UnorderedList>
                    <ListItem>Theory</ListItem>
                    <ListItem>General application</ListItem>
                    <ListItem>Programming usage</ListItem>
                    <ListItem>JavaScript integration</ListItem>
                </UnorderedList>
            </Notes>
        </Slide>
        <Slide>
            <FlexBox width="80%" height="100%" flexDirection="column" alignSelf="center" alignItems="flex-start">
                <UnorderedList>
                    <ListItem>
                        FSM is the simplest form of the 4 <strong>automaton</strong> families
                    </ListItem>
                    <ListItem>
                        First description of FSM by Warren McCulloch and Walter Pitts in <strong>1943</strong>
                    </ListItem>
                    <ListItem>
                        Ideal computation model for a <strong>small amount of memory</strong>
                    </ListItem>
                </UnorderedList>
            </FlexBox>
            <Notes>
                <Heading>THEORY</Heading>
                <Text color="secondary">Automata theory</Text>
                <Text>
                    Automata theory deals with the logic of computation ant try to understand what it means for a
                    function to be defined as computable or for a question to be described as decidable
                </Text>
                <Text>
                    In automata theory, an automaton is an abstract model of machine that performs computations on an
                    input by moving through a series of states or configurations
                </Text>
                <Text color="secondary">Automaton families:</Text>
                <UnorderedList>
                    <ListItem>Finite state machine</ListItem>
                    <ListItem>Pushdown automata</ListItem>
                    <ListItem>Linear-bounded automata</ListItem>
                    <ListItem>Turing machine</ListItem>
                </UnorderedList>
                <FlexBox flexDirection="column" alignItems="flex-start" mt={80}>
                    <Link
                        href="https://cs.stanford.edu/people/eroberts/courses/soco/projects/2004-05/automata-theory/basics.html"
                        fontSize="tiny"
                        margin="none"
                        padding="none"
                    >
                        Automata theory basics
                    </Link>
                    <Link
                        href="https://www.cs.cmu.edu/~./epxing/Class/10715/reading/McCulloch.and.Pitts.pdf"
                        fontSize="tiny"
                        margin="none"
                        padding="none"
                    >
                        A Logical Calculus Immanent in Nervous Activity - Warren s. McCulloch and Walter Pitts
                    </Link>
                    <Link
                        href="https://www.youtube.com/watch?v=L5O04P2ASRc"
                        fontSize="tiny"
                        margin="none"
                        padding="none"
                    >
                        La machine de Turing, film de Florence RIOU
                    </Link>
                    <Link
                        href="http://www.i3s.unice.fr/~deantoni/teaching_resources/SI4/FSM/cours/1_Introduction.pdf"
                        fontSize="tiny"
                        margin="none"
                        padding="none"
                    >
                        Machine à états finis - Julien Deantoni
                    </Link>
                </FlexBox>
            </Notes>
        </Slide>
        <Slide>
            <FlexBox width="80%" height="100%" flexDirection="column" alignSelf="center" alignItems="flex-start">
                <Quote>"A finite state machine is a mathematical abstraction used to design algorithm"</Quote>
                <Link
                    href="https://www.freecodecamp.org/news/state-machines-basics-of-computer-science-d42855debc66/"
                    fontSize="tiny"
                >
                    Understanding State Machines - Mark Shead
                </Link>
            </FlexBox>
            <Notes>
                <Heading>DEFINITION: FIRST ATTEMPT</Heading>
            </Notes>
        </Slide>
        <Slide>
            <FlexBox width="80%" height="100%" flexDirection="column" alignSelf="center" alignItems="flex-start">
                <Quote>
                    "It (a finite state machine) is an abstract machine that can be in exactly one of a finite number of
                    states at any given time"
                </Quote>
                <Link href="https://en.wikipedia.org/wiki/Finite-state_machine" fontSize="tiny">
                    Finite state machine - Wikipedia
                </Link>
            </FlexBox>
            <Notes>
                <Heading>DEFINITION: SECOND ATTEMPT</Heading>
                <Text>The FSM can change from one state to another in response to some inputs</Text>
                <Text>
                    The change from one state to another is called a <strong>transition</strong>
                </Text>
                <Text color="secondary">FSM are of two types:</Text>
                <UnorderedList>
                    <ListItem>
                        Deterministic finite state machines: an input from a state can lead to one other state only
                    </ListItem>
                    <ListItem>
                        Non-deterministic finite state machines: an input from a state can lead to several other states
                    </ListItem>
                </UnorderedList>
            </Notes>
        </Slide>
        <Slide>
            <FlexBox width="80%" height="100%" flexDirection="column" alignSelf="center" alignItems="flex-start">
                <Quote>
                    "A state is a description of the status of a system that is waiting to execute a transition."
                </Quote>
                <Link href="https://statecharts.github.io/what-is-a-state-machine.html" fontSize="tiny">
                    What is a state machine? - statecharts.github.io
                </Link>
            </FlexBox>
            <Notes>
                <Heading>DEFINITION: STATE</Heading>
            </Notes>
        </Slide>
        <Slide backgroundColor="secondary">
            <FlexBox
                width="60%"
                height="100%"
                flexDirection="row"
                alignSelf="center"
                alignItems="center"
                justifyContent="space-between"
            >
                <Image src={`${process.env.PUBLIC_URL}/images/alive-kitten.png`} width={3 / 7}/>
                <Image src={`${process.env.PUBLIC_URL}/images/dead-kitten.png`} width={3 / 7}/>
            </FlexBox>
            <Notes>
                <Text>
                    <strong>State with me:</strong> it is impossible for the cat to be both dead and alive at the same
                    time, and it is impossible for the cat to be neither dead nor alive
                </Text>
                <Text color="secondary">Fuck Schrödinger</Text>
            </Notes>
        </Slide>
        <Slide>
            <FlexBox width="100%" height="100%" flexDirection="row" alignItems="center" justifyContent="center">
                <FlexBox width={2 / 5} justifyContent="flex-end">
                    <CodeSpan color="secondary" fontSize="code">
                        (Σ, S, s0, δ, F)
                    </CodeSpan>
                </FlexBox>
                <FlexBox>
                    <UnorderedList>
                        <ListItem>
                            <strong>S</strong>: Finite number of states
                        </ListItem>
                        <ListItem>
                            <strong>Σ</strong>: Finite number of inputs
                        </ListItem>
                        <ListItem>
                            <strong>s0</strong>: Initial state
                        </ListItem>
                        <ListItem>
                            <strong>δ</strong>: Finite number of final states
                        </ListItem>
                        <ListItem>
                            <strong>F</strong>: State-transition function
                        </ListItem>
                    </UnorderedList>
                </FlexBox>
            </FlexBox>
            <Notes>
                <Heading>PIECES OF FSM</Heading>
                <UnorderedList>
                    <ListItem>
                        <strong>Σ</strong>: Sigma
                    </ListItem>
                    <ListItem>
                        <strong>δ</strong>: Delta
                    </ListItem>
                </UnorderedList>
            </Notes>
        </Slide>
        <Slide>
            <FlexBox
                width="80%"
                height="100%"
                flexDirection="row"
                alignSelf="center"
                alignItems="center"
                justifyContent="space-between"
            >
                <Image src={`${process.env.PUBLIC_URL}/images/traffic-light-model.png`}/>
                <Heading>TRAFFIC LIGHT</Heading>
            </FlexBox>
            <Notes>
                <Text>
                    The simplest example of a state machine applied to our day to day life is the traffic lights
                </Text>
                <Text color="secondary">Model</Text>
                <UnorderedList>
                    <ListItem>
                        States: <CodeSpan fontSize="code">[green, yellow, red]</CodeSpan>
                    </ListItem>
                    <ListItem>
                        Inputs: <CodeSpan fontSize="code">[TIMER_END]</CodeSpan>
                    </ListItem>
                    <ListItem>
                        Initial state: <CodeSpan fontSize="code">green</CodeSpan>
                    </ListItem>
                    <ListItem>
                        Final state: <CodeSpan fontSize="code">[red]</CodeSpan>
                    </ListItem>
                    <ListItem>
                        Transition table:
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableCell backgroundColor="#333333" border="1px solid white" p="10px"></TableCell>
                                    <TableCell backgroundColor="#333333" border="1px solid white" p="10px">
                                        <CodeSpan fontSize="code">TIMER_END</CodeSpan>
                                    </TableCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell backgroundColor="#333333" border="1px solid white" p="10px">
                                        <CodeSpan fontSize="code">green</CodeSpan>
                                    </TableCell>
                                    <TableCell border="1px solid white" p="10px">
                                        <CodeSpan fontSize="code">yellow</CodeSpan>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell backgroundColor="#333333" border="1px solid white" p="10px">
                                        <CodeSpan fontSize="code">yellow</CodeSpan>
                                    </TableCell>
                                    <TableCell border="1px solid white" p="10px">
                                        <CodeSpan fontSize="code">red</CodeSpan>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell backgroundColor="#333333" border="1px solid white" p="10px">
                                        <CodeSpan fontSize="code">red</CodeSpan>
                                    </TableCell>
                                    <TableCell border="1px solid white" p="10px">
                                        <CodeSpan fontSize="code">green</CodeSpan>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </ListItem>
                </UnorderedList>
                <Text>Note the real model can be much more complex to manage error or maintenance states</Text>
            </Notes>
        </Slide>
        <Slide>
            <FlexBox
                width="80%"
                height="100%"
                flexDirection="row"
                alignSelf="center"
                alignItems="center"
                justifyContent="space-between"
            >
                <Heading>WATER</Heading>
                <Image src={`${process.env.PUBLIC_URL}/images/water-model.png`}/>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox
                width="80%"
                height="100%"
                flexDirection="row"
                alignSelf="center"
                alignItems="center"
                justifyContent="space-between"
            >
                <Image src={`${process.env.PUBLIC_URL}/images/promise-model.png`}/>
                <Heading>PROMISE</Heading>
            </FlexBox>
            <Notes>
                <Text color="secondary">JavaScript promise is just a state machine with 3 states:</Text>
                <UnorderedList>
                    <ListItem>
                        <CodeSpan fontSize="code">Pending</CodeSpan>
                    </ListItem>
                    <ListItem>
                        <CodeSpan fontSize="code">Resolved</CodeSpan>
                    </ListItem>
                    <ListItem>
                        <CodeSpan fontSize="code">Rejected</CodeSpan>
                    </ListItem>
                </UnorderedList>
                <Link href="https://www.promisejs.org/implementing/">promisejs.org/implementing - Forbes Lindesay</Link>
            </Notes>
        </Slide>
        <Slide>
            <FlexBox width="80%" height="100%" flexDirection="column" alignSelf="center" alignItems="center">
                <CodePane fontSize={18} language="javascript" autoFillHeight={true}>
                    {`{                                                                                     
	initialState: "pending",
	pending: {
		transitions: {
			resolve: {
				target: "resolved"
			},
			reject: {
				target: "rejected"
			}
		}
	},
	resolved: {},
	rejected: {}
}`}
                </CodePane>
            </FlexBox>
            <Notes>
                <Heading>SERIALIZATION</Heading>
                <Text>A state machine can be described as a JSON object</Text>
            </Notes>
        </Slide>
        <Slide backgroundColor="secondary">
            <FlexBox width="80%" height="100%" flexDirection="column" alignSelf="center" alignItems="center">
                <Heading color="primary">DEMO</Heading>
            </FlexBox>
        </Slide>
        <Slide>
            <Heading>WHERE'S MY PROFIT, DUDE?</Heading>
            <FlexBox width="80%" height="60%" flexDirection="column" alignSelf="center" alignItems="flex-start">
                <UnorderedList>
                    <ListItem>Flexible system configuration</ListItem>
                    <ListItem>Easier debug & maintenance & testing</ListItem>
                    <ListItem>Common language for designers & developers</ListItem>
                </UnorderedList>
            </FlexBox>
            <Notes>
                <Text color="secondary">Flexible system configuration:</Text>
                <Text>Data-driven => Whole system can be externalized</Text>
                <Text color="secondary">Easier debug & maintenance & testing:</Text>
                <Text>Transitions are pure functions</Text>
                <Text color="secondary">Common language for designers & developers</Text>
                <Text>State === Screen</Text>
                <Link
                    href="https://medium.com/datadriveninvestor/state-machine-design-pattern-why-how-example-through-spring-state-machine-part-1-f13872d68c2d"
                    fontSize="tiny"
                    margin="none"
                    padding="none"
                >
                    State Machine Design pattern —Part 1: When, Why & How - Kousik Nath
                </Link>
            </Notes>
        </Slide>
        <Slide>
            <Heading>CUT THE CRAP, WHERE'S THE SCAM?</Heading>
            <FlexBox width="80%" height="60%" flexDirection="column" alignSelf="center" alignItems="flex-start">
                <UnorderedList>
                    <ListItem>Synchronous by nature</ListItem>
                    <ListItem>More architectural efforts</ListItem>
                    <ListItem>Limited ecosystem</ListItem>
                </UnorderedList>
            </FlexBox>
            <Notes>
                <FlexBox flexDirection="column" alignItems="flex-start" mt={80}>
                    <Link
                        href="https://medium.com/datadriveninvestor/state-machine-design-pattern-why-how-example-through-spring-state-machine-part-1-f13872d68c2d">
                        State Machine Design pattern —Part 1: When, Why & How - Kousik Nath
                    </Link>
                </FlexBox>
            </Notes>
        </Slide>
        <Slide>
            <FlexBox
                width="85%"
                height="100%"
                flexDirection="row"
                alignSelf="center"
                alignItems="center"
                justifyContent="space-between"
            >
                <Image src={`${process.env.PUBLIC_URL}/images/state-explosion-before.png`} width={3 / 7}/>
                <Image src={`${process.env.PUBLIC_URL}/images/state-explosion-after.png`} width={3 / 7}/>
            </FlexBox>
            <Notes>
                <Heading>STATE EXPLOSION</Heading>
                <FlexBox flexDirection="column" alignItems="flex-start" mt={80}>
                    <Link href="https://statecharts.github.io/state-machine-state-explosion.html">
                        State Machine: State Explosion - statecharts.github.io
                    </Link>
                </FlexBox>
            </Notes>
        </Slide>
        <Slide>
            <Heading>STATECHARTS</Heading>
            <FlexBox width="80%" height="60%" flexDirection="column" alignSelf="center" alignItems="flex-start">
                <UnorderedList>
                    <ListItem>
                        <strong>Actions</strong> (entry, exit, transition)
                    </ListItem>
                    <ListItem>
                        <strong>Guards</strong> for conditional transitions
                    </ListItem>
                    <ListItem>
                        <strong>Hierarchy</strong> (nested states)
                    </ListItem>
                    <ListItem>
                        <strong>Orthogonality</strong> (parallel states)
                    </ListItem>
                    <ListItem>
                        <strong>History</strong> (remembered states)
                    </ListItem>
                </UnorderedList>
            </FlexBox>
            <Notes>
                <FlexBox flexDirection="column" alignItems="flex-start" mt={80}>
                    <Link href="http://www.inf.ed.ac.uk/teaching/courses/seoc/2004_2005/resources/statecharts.pdf">
                        Statecharts: a visual formalism for complex systems - David Harel
                    </Link>
                </FlexBox>
            </Notes>
        </Slide>
        <Slide>
            <Heading>SCXML</Heading>
            <FlexBox width="80%" height="60%" flexDirection="column" alignSelf="center" alignItems="flex-start">
                <CodePane fontSize={18} language="xml" autoFillHeight={true}>
                    {`<scxml initial="working" name="TrafficLightStateMachine" version="1.0" xmlns="http://www.w3.org/2005/07/scxml" xmlns:qt="http://www.qt.io/2015/02/scxml-ext" qt:editorversion="4.3.1">
	<state id="working" initial="red">
		<onexit>
			<cancel sendid="ID_startGoingGreen"/>
			<cancel sendid="ID_startGoingRed"/>
		</onexit>
		<transition event="switch" target="broken" type="internal"/>
		<state id="red">
			<onentry>
				<send delay="3s" event="startGoingGreen" id="ID_startGoingGreen"/>
			</onentry>
			<transition event="startGoingGreen" target="redGoingGreen" type="internal"/>
		</state>
		<state id="yellow">
			<onexit>
				<cancel sendid="ID_goGreen"/>
				<cancel sendid="ID_goRed"/>
			</onexit>
			<state id="redGoingGreen">
				<onentry>
					<send delay="1s" event="goGreen" id="ID_goGreen"/>
				</onentry>
				<transition event="goGreen" target="green" type="internal"/>
			</state>
			<state id="greenGoingRed">
				<onentry>
					<send delay="1s" event="goRed" id="ID_goRed"/>
				</onentry>
				<transition event="goRed" target="red" type="internal"/>
			</state>
		</state>
		<state id="green">
			<onentry>
				<send delay="3s" event="startGoingRed" id="ID_startGoingRed"/>
			</onentry>
			<transition event="startGoingRed" target="greenGoingRed" type="internal"/>
		</state>
	</state>
</scxml>`}
                </CodePane>
                <Link href="https://www.w3.org/TR/scxml/" fontSize="tiny">
                    State Chart XML (SCXML): State Machine Notation for Control Abstraction - W3C
                </Link>
            </FlexBox>
        </Slide>
        <Slide>
            <Heading>JAVASCRIPT-STATE-MACHINE</Heading>
            <FlexBox width="80%" height="60%" flexDirection="column" alignSelf="center" alignItems="flex-start">
                <CodePane fontSize={18} language="javascript" autoFillHeight={true}>
                    {`const machine = new StateMachine({                                                        
    init: 'solid',
    transitions: [
      { name: 'melt', from: 'SOLID', to: 'LIQUID' },
      { name: 'freeze', from: 'LIQUID', to: 'SOLID' },
      { name: 'vaporize', from: 'LIQUID', to: 'GASEOUS' },
      { name: 'condense', from: 'GASEOUS', to: 'LIQUID' },
      { name: 'sublime', from: 'SOLID', to: 'GASEOUS' },
      { name: 'deposite', from: 'GASEOUS', to: 'SOLID' }
    ],
    methods: {
      onMelt: function() { console.log('I melted') },
      onFreeze: function() { console.log('I froze') },
      onVaporize: function() { console.log('I vaporized') },
      onCondense: function() { console.log('I condensed') },
      onSublime: function() { console.log('I sublimed') },
      onDeposite: function() { console.log('I deposited') }
    }
  })
const nextState = machine.melt()`}
                </CodePane>
                <Link href="https://github.com/jakesgordon/javascript-state-machine/" fontSize="tiny">
                    https://github.com/jakesgordon/javascript-state-machine
                </Link>
            </FlexBox>
        </Slide>
        <Slide>
            <Heading>MACHINA</Heading>
            <FlexBox width="80%" height="60%" flexDirection="column" alignSelf="center" alignItems="flex-start">
                <CodePane fontSize={18} language="javascript" autoFillHeight={true}>
                    {`const machine = new machina.Fsm({                                                         
    initialize: options => {},
    namespace: "traffic-lights",
    initialState: "uninitialized",
    states: {
        uninitialized: {
            "*": () => {
                this.deferUntilTransition();
                this.transition( "green" );
            }
        },
        green: {
            _onEnter: () => {
                this.timer = setTimeout( function() {
                    this.handle( "timeout" );
                }.bind( this ), 30000 );
                this.emit( "vehicles", { status: GREEN } );
            },
            timeout: "green-interruptible",
            pedestrianWaiting: () => {
                this.deferUntilTransition( "green-interruptible" );
            },
            _onExit: () => {
                clearTimeout( this.timer );
            }
        },
        "green-interruptible": {
            pedestrianWaiting: "yellow"
        },
        yellow: {
            _onEnter: () => {
                this.timer = setTimeout( function() {
                    this.handle( "timeout" );
                }.bind( this ), 5000 );
                this.emit( "vehicles", { status: YELLOW } );
            },
            timeout: "red",
            _onExit: () => {
                clearTimeout( this.timer );
            }
        },
        red: {
            _onEnter: () => {
                this.timer = setTimeout( function() {
                    this.handle( "timeout" );
                }.bind( this ), 1000 );
                this.emit( "vehicles", { status: RED } );
            },
            _reset: "green",
            _onExit: () => {
                clearTimeout(this.timer);
            }
        }
    },
    reset: () => {
        this.handle( "_reset" );
    },
    pedestrianWaiting: () => {
        this.handle( "pedestrianWaiting" );
    }
})
const nextState = machine.pedestrianWaiting()`}
                </CodePane>
                <Link href="http://machina-js.org/" fontSize="tiny">
                    machina-js.org
                </Link>
            </FlexBox>
        </Slide>
        <Slide>
            <Heading>XSTATE</Heading>
            <FlexBox width="80%" height="60%" flexDirection="column" alignSelf="center" alignItems="flex-start">
                <CodePane fontSize={18} language="javascript" autoFillHeight={true}>
                    {`const machine = Machine({                                                                 
		initial: 'pending',
		states: {
			pending: {
				on: {
					resolve: 'resolved',
				},
				on: {
					reject: 'rejected',
				},
			},
			resolved: {},
			rejected: {},
		},
	})
const nextState = machine.transition('pending', 'resolve')`}
                </CodePane>
                <Link href="https://xstate.js.org/" fontSize="tiny">
                    xstate.js.org
                </Link>
            </FlexBox>
            <Notes>
                <Link href="https://xstate.js.org/viz/">xstate.js.org/viz</Link>
            </Notes>
        </Slide>
        <Slide backgroundColor="secondary">
            <FlexBox width="80%" height="100%" flexDirection="column" alignSelf="center" alignItems="center">
                <Heading color="primary">DEMO</Heading>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox width="80%" height="100%" flexDirection="column" alignSelf="center" alignItems="center">
                <Heading>RESOURCES</Heading>
                <FlexBox width="100%" height="100%" flexDirection="column" alignSelf="center" alignItems="flex-start">
                    <Link
                        href="https://www.youtube.com/playlist?list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev"
                        fontSize="tiny"
                        margin="none"
                        padding="none"
                    >
                        Theory of Computation & Automata Theory (Videos) - Neso Academy
                    </Link>
                    <Link
                        href="https://kentcdodds.com/blog/implementing-a-simple-state-machine-library-in-javascript"
                        fontSize="tiny"
                        margin="none"
                        padding="none"
                    >
                        Implementing a simple state machine library in JavaScript - Kent C. Dodds
                    </Link>
                    <Link
                        href="https://www.youtube.com/watch?v=VU1NKX6Qkxc"
                        fontSize="tiny"
                        margin="none"
                        padding="none"
                    >
                        Infinitely Better UIs with Finite Automata (Vidéo) - David Khourshid
                    </Link>
                    <Link
                        href="http://slides.com/davidkhourshid/finite-state-machines#/"
                        fontSize="tiny"
                        margin="none"
                        padding="none"
                    >
                        Infinitely Better UIs with Finite Automata (Slides) - David Khourshid
                    </Link>
                    <Link
                        href="https://www.youtube.com/watch?v=RqTxtOXcv8Y"
                        fontSize="tiny"
                        margin="none"
                        padding="none"
                    >
                        Simplifying Complex UIs with Finite Automata & Statecharts (Video) - David Khourshid
                    </Link>
                    <Link
                        href="https://www.youtube.com/watch?v=hiT4Q1ntvzg"
                        fontSize="tiny"
                        margin="none"
                        padding="none"
                    >
                        Formal Forms with State Machines (Video) - David Khourshid
                    </Link>
                    <Link
                        href="https://www.youtube.com/watch?v=0NkfCi-hKCc"
                        fontSize="tiny"
                        margin="none"
                        padding="none"
                    >
                        Finite State Machines in JavaScript (Video) - Steve Griffith
                    </Link>
                    <Link
                        href="https://gist.github.com/davidkpiano/e715b59bef817d2146164add26a134b0"
                        fontSize="tiny"
                        margin="none"
                        padding="none"
                    >
                        Article for creating CSS State Machines - David Khourshid
                    </Link>
                    <Link href="#" fontSize="tiny" margin="none" padding="none">
                        Constructing the User Interface with Statecharts (Book) - Ian Horrocks
                    </Link>
                </FlexBox>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column">
                <Image src={`${process.env.PUBLIC_URL}/images/dead-kitten.png`} width="18%"/>
                <Heading>THANKS</Heading>
            </FlexBox>
        </Slide>
    </Deck>
)

export default App