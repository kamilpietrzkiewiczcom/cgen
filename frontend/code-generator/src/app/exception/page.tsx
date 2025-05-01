"use client"
import Link from "next/link";
import React, {useState} from "react";

const Exception = () => {
    const [exceptionName, setExceptionName] = useState<string>("");

    const [exceptionType, setExceptionType] = useState<string>("InvalidArgumentException");

    const onExceptionNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExceptionName(event.target.value);
    }

    return <>
        <div>
            <Link href={"/"}>
                <button>Class</button>
            </Link>

            <Link href={"/exception"}>
                <button>Exception</button>
            </Link>
        </div>
        <div>
            <label>
                Exception name
                <input type={"text"} name={"exception-name"} value={exceptionName} onChange={onExceptionNameChangeHandler} />
            </label>
        </div>

        <div>

            <code>
                use InvalidArgumentException;
                <br />
                use Throwable;
                <br />
                <br />

                class {exceptionName} extends {exceptionType}
                <br />
                {"{"}
                    <br />
                    <span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span>
                    public function __construct(string $message = "", int $code = 0, ?Throwable $previous = null)
                        <br />
                        <span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span>{"{"}
                        <br />
                            <span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span><span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span>
                            if (mb_strlen($message) > 0) {"{"}$message .= " - ";{"}"}
                            <br />
                            <span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span><span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span>
                            $message .= "";
                            <br />
                            <span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span><span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span>
                            parent::__construct($message, $code, $previous);
                            <br />
                        <span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span>{"}"}
                        <br />
                {"}"}
           </code>

        </div>
    </>
}

export default Exception;