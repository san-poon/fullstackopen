const App = () => {
  const course = {
    name: 'Half Stack app dev',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header heading={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ heading }) => {
  return <h1>{heading}</h1>
}

const Content = ({ parts }) => {
  return parts.map((content) =>
    <p key={content.id}>{content.name} : {content.exercises}</p>
  )
}

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((total, currentPart) => {
    return total + currentPart.exercises
  }, 0);
  return <p>Total Exercises: {totalExercises}</p>
}

export default App;