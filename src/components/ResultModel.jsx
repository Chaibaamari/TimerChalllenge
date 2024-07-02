import { forwardRef, useImperativeHandle } from "react";
import { useRef } from "react";
/* eslint-disable react/prop-types */
const Result = forwardRef(function ResultModel({ TargetTime, remainingTime , resetTime }, ref) {
    const LostTime = remainingTime <= 0;
    const timeremaine = remainingTime / 1000;
    const Probability = Math.round((1 - remainingTime / (TargetTime * 1000)) * 100)
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
        };
    });
    return (
        <dialog ref={dialog} className="result-modal">
            {LostTime && <h2>you lose</h2>}
            {!LostTime && <h2>you score : {Probability}%</h2>}
            <p>
                The Target Time was <strong>{TargetTime} second</strong>
            </p>
            <p>
                you stop The Timer With <strong> {timeremaine} second left</strong>
            </p>
            <form method="dialog">
                <button type="submited" onClick={resetTime}>Close</button>
            </form>
        </dialog>
    );
});
export default Result