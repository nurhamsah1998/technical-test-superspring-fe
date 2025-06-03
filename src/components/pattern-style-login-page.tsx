import patternTopLeft from "../assets/pattern-tl.svg";
import patternTopRight from "../assets/pattern-tr.svg";
import patternBottomLeft from "../assets/pattern-bl.svg";
import patternBottomRight from "../assets/pattern-br.svg";

function PatternStyleLoginPage() {
  return (
    <>
      <img src={patternTopLeft} className="absolute top-0 left-0" />
      <img src={patternTopRight} className="absolute top-0 right-0" />
      <img src={patternBottomLeft} className="absolute bottom-0 left-0" />
      <img src={patternBottomRight} className="absolute bottom-0 right-0" />
    </>
  );
}

export default PatternStyleLoginPage;
