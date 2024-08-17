import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Coming Soon"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet lacus eu velit pretium, in sollicitudin odio dapibus. Sed vulputate eros vel libero efficitur, vitae dignissim neque fermentum. Curabitur vel purus et est cursus euismod. Duis pharetra, lacus et laoreet facilisis, tortor risus ultricies nisi, ac fermentum est urna non ipsum. Nam auctor, nisl eu congue fringilla, eros velit lacinia lorem, nec consectetur mi libero ac nunc. Donec varius, libero sed ultricies facilisis, felis lorem hendrerit metus, id pharetra nulla nunc ut sem. Integer auctor consequat nulla, nec faucibus purus lacinia nec. Ut ut lectus sapien.
"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Coming Soon"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet lacus eu velit pretium, in sollicitudin odio dapibus. Sed vulputate eros vel libero efficitur, vitae dignissim neque fermentum. Curabitur vel purus et est cursus euismod. Duis pharetra, lacus et laoreet facilisis, tortor risus ultricies nisi, ac fermentum est urna non ipsum. Nam auctor, nisl eu congue fringilla, eros velit lacinia lorem, nec consectetur mi libero ac nunc. Donec varius, libero sed ultricies facilisis, felis lorem hendrerit metus, id pharetra nulla nunc ut sem. Integer auctor consequat nulla, nec faucibus purus lacinia nec. Ut ut lectus sapien.
"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Coming Soon"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet lacus eu velit pretium, in sollicitudin odio dapibus. Sed vulputate eros vel libero efficitur, vitae dignissim neque fermentum. Curabitur vel purus et est cursus euismod. Duis pharetra, lacus et laoreet facilisis, tortor risus ultricies nisi, ac fermentum est urna non ipsum. Nam auctor, nisl eu congue fringilla, eros velit lacinia lorem, nec consectetur mi libero ac nunc. Donec varius, libero sed ultricies facilisis, felis lorem hendrerit metus, id pharetra nulla nunc ut sem. Integer auctor consequat nulla, nec faucibus purus lacinia nec. Ut ut lectus sapien.
"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Coming Soon"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet lacus eu velit pretium, in sollicitudin odio dapibus. Sed vulputate eros vel libero efficitur, vitae dignissim neque fermentum. Curabitur vel purus et est cursus euismod. Duis pharetra, lacus et laoreet facilisis, tortor risus ultricies nisi, ac fermentum est urna non ipsum. Nam auctor, nisl eu congue fringilla, eros velit lacinia lorem, nec consectetur mi libero ac nunc. Donec varius, libero sed ultricies facilisis, felis lorem hendrerit metus, id pharetra nulla nunc ut sem. Integer auctor consequat nulla, nec faucibus purus lacinia nec. Ut ut lectus sapien.
"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Coming Soon"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet lacus eu velit pretium, in sollicitudin odio dapibus. Sed vulputate eros vel libero efficitur, vitae dignissim neque fermentum. Curabitur vel purus et est cursus euismod. Duis pharetra, lacus et laoreet facilisis, tortor risus ultricies nisi, ac fermentum est urna non ipsum. Nam auctor, nisl eu congue fringilla, eros velit lacinia lorem, nec consectetur mi libero ac nunc. Donec varius, libero sed ultricies facilisis, felis lorem hendrerit metus, id pharetra nulla nunc ut sem. Integer auctor consequat nulla, nec faucibus purus lacinia nec. Ut ut lectus sapien.
"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Coming Soon"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet lacus eu velit pretium, in sollicitudin odio dapibus. Sed vulputate eros vel libero efficitur, vitae dignissim neque fermentum. Curabitur vel purus et est cursus euismod. Duis pharetra, lacus et laoreet facilisis, tortor risus ultricies nisi, ac fermentum est urna non ipsum. Nam auctor, nisl eu congue fringilla, eros velit lacinia lorem, nec consectetur mi libero ac nunc. Donec varius, libero sed ultricies facilisis, felis lorem hendrerit metus, id pharetra nulla nunc ut sem. Integer auctor consequat nulla, nec faucibus purus lacinia nec. Ut ut lectus sapien.
"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
