import './style.css'

const linh = [1, 2, 3]

const MyFunction = () => {
    return (
      <>
        <div>{JSON.stringify(linh)} \t {linh.age} Dep trai </div>
        <div>{console.log("Emper")}</div>
        <div className='child'>co gi sai?</div>
      </>
    );
  }

  export default MyFunction;