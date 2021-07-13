function Section({name, nbr, setNbr}) {
    const add = () => {
        setNbr(nbr+1)
    }
    const dim = () => {
        setNbr(nbr-1)
    }
    return ( 
      <div>
        je suis {name}
        {nbr}
        <button onClick={add}>+</button>
        <button onClick={dim}>-</button>
      </div>
    );
}

export default Section;
