# Finite State Machines by [@untemps](https://www.linkedin.com/in/vincent-le-badezet-29315028/)

## Automata theory

Automata Theory is an exciting, theoretical branch of computer science. It established its roots
during the 20th Century, as mathematicians began developing - both theoretically and literally -
machines which imitated certain features of man, completing calculations more quickly and
reliably. Simply stated, automata theory deals with the logic of computation with respect to
simple machines, referred to as automata. Through automata, computer scientists are able to
understand how machines compute functions and solve problems and more importantly, what it means
for a function to be defined as computable or for a question to be described as decidable.

Automatons are abstract models of machines that perform computations on an input by moving
through a series of states or configurations. At each state of the computation, a transition
function determines the next configuration on the basis of a finite portion of the present
configuration. As a result, once the computation reaches an accepting configuration, it accepts
that input. The most general and powerful automata is the Turing machine.

There are four major families of automaton :

-   Finite-state machine
-   Pushdown automata
-   Linear-bounded automata
-   Turing machine

The families of automata above can be interpreted in a hierarchal form, where the finite-state
machine is the simplest automata and the Turing machine is the most complex.

The first people to consider the concept of a finite-state machine shared a common interest: to
model the human thought process, whether in the brain or in a computer. Warren McCulloch and
Walter Pitts, two neurophysiologists, were the first to present a description of finite automata
in 1943. Their paper, entitled, "A Logical Calculus Immanent in Nervous Activity", made
significant contributions to the study of neural network theory, theory of automata, the theory
of computation and cybernetics. Later, two computer scientists, G.H. Mealy and E.F. Moore,
generalized the theory to much more powerful machines in separate papers, published in 1955-56.
The finite-state machines, the Mealy machine and the Moore machine, are named in recognition of
their work.

Finite-state machines are ideal computation models for a small amount of memory, and do not
maintain memory. This mathematical model of a machine can only reach a finite number of states
and transitions between these states.

Having finite, constant amounts of memory, the internal states of an FSM carry no further
structure.

There exist several types of finite-state machines, which can be divided into three main
categories:

-   acceptors: either accept the input or do not
-   recognizers: either recognize the input or do not
-   transducers: generate output from given input

## Turing Machine

A Turing machine is a state machine with an infinite number of states since it is able to erase and
write

A Turing Machines is computationally complete — meaning anything that can be computed, can be
computed on a Turing Machine

Turing Machines give us an imaginary mechanical device that lets us visualize and understand how the
computational process works. It is particularly useful in understanding the limits of computation

## Statecharts

Visual formalism for modeling stateful systems

A statechart is essentially a state machine that allows any state to include more machines, in a
hierarchical fashion. This is to overcome some of the limitations that are inherent to state machines.

The original paper that defines statecharts bills them as “A visual formalism for complex systems”
(David Harel, 1987)

- Actions (entry, exit, transition)
- Guards for conditional transitions
- Hierarchy (nested states)
- Orthogonality (parallel states)
- History (remembered states)
