---
pagination:
    data: contestScores
    size: 1
    alias: contest
title: {{ contest.name }}
permalink: "contests/{{ contest.name | slug}}/"
---

{{ contest.name }}

<table>
    <tr>
        <td>Bands</td>
        <td>QSOs</td>
    </tr>
    <tr>
        <td>160</td>
        <td>{{contest.160qsos}}</td>
    </tr>
    <tr>
        <td>80</td>
        <td>{{contest.80qsos}}</td>
    </tr>
    <tr>
        <td>40</td>
        <td>{{contest.40qsos}}</td>
    </tr>
    <tr>
        <td>20</td>
        <td>{{contest.20qsos}}</td>
    </tr>
    <tr>
        <td>10</td>
        <td>{{contest.10qsos}}</td>
    </tr>
    <tr>
        <td>Mults</td>
        <td>{{contest.mults}}</td>
    </tr>
    <tr>
        <td>Total Score</td>
        <td>{{contest.score}}</td>
    </tr>
</table>

<p>{{ contest }}</p>