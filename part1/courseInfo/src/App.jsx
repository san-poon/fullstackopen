const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const contents = [
    { id: 0, part: part1, exercises: exercises1 },
    { id: 1, part: part2, exercises: exercises2 },
    { id: 2, part: part3, exercises: exercises3 }
  ];

  return (
    <div>
      <Header heading={course} />
      <Content contents={contents} />
      <p>Total no. of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

const Header = ({ heading }) => {
  return <h1>{heading}</h1>
}

const Content = ({ contents }) => {
  return contents.map((content) =>
    <p key={content.id}>{content.part} : {content.exercises}</p>
  )
}

export default App;