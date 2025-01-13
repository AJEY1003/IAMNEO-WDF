import { useState } from "react";

function Text() {
  const [like, setLike] = useState(false);

  function handleChange(e) {
    setLike(e.target.checked);
  }

  return (
    <>
      <input type="checkbox" onChange={handleChange} />
      <p>You {like ? "liked" : "did not like"} this</p>
    </>
  );
}

export default Text;
