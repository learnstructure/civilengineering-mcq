import { useRouter } from "next/router";
import { dataRCC } from "@/datamcq/dataRCC";
import Mcq from "@/components/mcq";
import { dataStructure } from "@/datamcq/dataStructure";
import { dataSurveying } from "@/datamcq/dataSurveying";
import { dataGeotechnical } from "@/datamcq/dataGeotechnical";
import { dataConstructionManagement } from "@/datamcq/dataConstructionManagement";
import { dataEstimating } from "@/datamcq/dataEstimating";

function Subject() {
    const router = useRouter()
    const { subject } = router?.query

    if (!subject) {
        return <div>Loading..</div>
    }
    var mcqData
    switch (subject) {
        case "rcc":
            mcqData = [...dataRCC]
            break;
        case "structure":
            mcqData = [...dataStructure]
            break;
        case "surveying":
            mcqData = [...dataSurveying]
            break;
        case "geotechnical":
            mcqData = [...dataGeotechnical]
            break;
        case "constructionmanagement":
            mcqData = [...dataConstructionManagement]
            break;
        case "estimation":
            mcqData = [...dataEstimating]
            break;
        default:
            break;
    }

    const mcqElements = mcqData.map((mcq, index) => {
        const id = (index + mcq.question.substring(1, 20) + mcq.optionA.substring(1, 10) + mcq.question.slice(-20) + mcq.optionB.substring(1, 10)).replaceAll(' ', '')
        return (<Mcq
            key={id}
            id={id}
            serialno={index + 1}
            question={mcq.question}
            optionA={mcq.optionA}
            optionB={mcq.optionB}
            optionC={mcq.optionC}
            optionD={mcq.optionD}
            correct={mcq.correct} />)
    })
    return (
        <div>
            {mcqElements}
        </div>
    );
}


export default Subject;