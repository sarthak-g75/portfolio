const VerticalLines = ({ bg }) => {
  return (
    <div className='flex justify-between '>
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className={`w-[1px] h-screen ${
            bg === 'black' ? 'bg-primary' : 'bg-accent dark:bg-darkAccent'
          } opacity-5`}
        ></div>
      ))}
    </div>
  )
}

export default VerticalLines
