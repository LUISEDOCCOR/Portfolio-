import React  from "react";
import {CardProyects, CardSkills, CardCertifications} from "./Cards";
 
const Section = ({items, type, text, children, className}) => {
    return(
        <article className="text-white mt-32 bg-neutral-950 scroll-m-11" id={type}>
            <div className="flex items-center gap-3">
                { children }
                <h3 className="text-3xl font-semibold">{ text }</h3>
            </div>
            <section className={`${className ? className : 'grid grid-cols-2 gap-8 place-items-center'} mt-16 `}>
                {
                    type == 'projects'  ? (
                        items.map((item, index) => [
                            <CardProyects key={index} item={item} />
                        ])
                    ) : type == 'skills' ? (
                        items.map((item, index) => [
                            <CardSkills key={index} item={item} />
                        ])
                    )   : (
                        items.map((item, index) => [
                            <CardCertifications key={index} item={item} />
                        ])
                    )
                                  
                }
            </section>
        </article>
    )
} 


export default Section