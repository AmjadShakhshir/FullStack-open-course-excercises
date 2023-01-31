import React from 'react'
import StatisticLine from './StatisticLine'

function Statistics({result}) {
    const total = result.reduce((total, result) => total + result.result, 0)
    const score = result.reduce((acc, score) => acc + (score.score * score.result), 0)
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><StatisticLine text={result[0].text} /></td>
                        <td><StatisticLine value={result[0].result} /></td>
                    </tr>
                    <tr>
                        <td><StatisticLine text={result[1].text} /></td>
                        <td><StatisticLine value={result[1].result} /></td>
                    </tr>
                    <tr>
                        <td><StatisticLine text={result[2].text} /></td>
                        <td><StatisticLine value={result[2].result} /></td>
                    </tr>
                    <tr>
                        <td><p>all</p></td>
                        <td><p>{total}</p></td>
                    </tr>
                    <tr>
                        <td><p>average</p></td>
                        <td><p>{ score/total }</p></td>
                    </tr>
                    <tr>
                        <td><p>positive</p></td>
                        <td><p>{ result[0].result /total } %</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Statistics