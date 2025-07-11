import { CommonSection, TechStackWrapper } from "./styled";
const techStacks = [
  {
    key: "js",
    value: "JavaScript",
    icon: "devicon-javascript-plain colored",
  },
  {
    key: "ts",
    value: "TypeScript",
    icon: "devicon-typescript-plain",
  },
  {
    key: "ruby",
    value: "Ruby",
    icon: "devicon-ruby-plain colored",
  },
  {
    key: "react.js",
    value: "React",
    icon: "devicon-react-original colored",
  },
  {
    key: "ror",
    value: "Ruby on Rails",
    icon: "devicon-rails-plain colored",
  },
  {
    key: "node.js",
    value: "Node",
    icon: "devicon-nodejs-plain colored",
  },
  {
    key: "aws",
    value: "AWS",
    icon: "devicon-amazonwebservices-plain-wordmark colored",
  },
  {
    key: "mongo",
    value: "MongoDB",
    icon: "devicon-mongodb-plain colored",
  },
  {
    key: "postgresql",
    value: "PostgreSQL",
    icon: "devicon-postgresql-plain colored",
  },
  {
    key: "html",
    value: "HTML",
    icon: "devicon-html5-plain colored",
  },
  {
    key: "css",
    value: "CSS",
    icon: "devicon-css3-plain colored",
  },
  {
    key: "kotlin",
    value: "Kotlin",
    icon: "devicon-kotlin-plain colored",
  },
  {
    key: "redux",
    value: "Redux",
    icon: "devicon-redux-original colored",
  },
  {
    key: "graphql",
    value: "Graphql",
    icon: "devicon-graphql-plain colored",
  },
  {
    key: "kafka",
    value: "Apache Kafka",
    icon: "devicon-apachekafka-original ",
  },
];
const TechStack = () => {
  return (
    <CommonSection id="tech-stacks">
      <h2>Tech Stack</h2>
      <TechStackWrapper>
        {techStacks.map((stack) => (
          <li key={stack.key}>
            <i className={stack.icon} />
            <p>{stack.value}</p>
          </li>
        ))}
      </TechStackWrapper>
    </CommonSection>
  );
};

export default TechStack;
