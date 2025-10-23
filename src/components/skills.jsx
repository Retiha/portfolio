import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from "recharts";

const data = [
  { skill: "HTML", level: 90 },
  { skill: "CSS", level: 85 },
  { skill: "JavaScript", level: 80 },
  { skill: "React", level: 75 },
  { skill: "Node.js", level: 70 },
  { skill: "Git/GitHub", level: 85 },
];

function Skills() {
  return (
    <section id="skills" className="section skills-section" style={{ padding: "50px 10%" }}>
      <h2 style={{ color: "#dcd6f7" }}>Skills</h2>
      <p style={{ color: "#ccc", marginBottom: "30px" }}>Technical skills represented as a bar chart.</p>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
          barCategoryGap="10%"
        >
          <XAxis dataKey="skill" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1a1a1a",
              borderRadius: "6px",
              border: "none",
              color: "#fff",
            }}
          />
          <Bar dataKey="level" fill="#6c63ff" barSize={30}>
            <LabelList dataKey="level" position="top" style={{ fill: "#dcd6f7", fontWeight: "bold" }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

export default Skills;
