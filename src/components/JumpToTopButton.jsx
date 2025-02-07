const JumpToTopButton = () => {
  return (
    <div
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
      className='fixed flex items-center justify-center w-12 h-12 text-2xl rounded-full cursor-pointer bottom-4 right-4 bg-primary text-accent'
    >
      &uarr;
    </div>
  )
}

export default JumpToTopButton
