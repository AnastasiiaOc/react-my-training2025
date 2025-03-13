import {fetchArticles} from "../../articleService"
import axios from "axios";
import { useState, useEffect } from "react";
import css from "./ArticleService.module.css"
export default function ArticleService ({requests}) {
        return (
                       
            <ul className={css.list}>
                {requests.map((request) => (
                    <li key={request.objectID}>
                        <a className={css.link} href={request.url}>
                            {request.title}
                        </a>
                    </li>
                ))}
            </ul>
       
        );
    }
