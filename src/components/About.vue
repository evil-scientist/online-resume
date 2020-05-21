<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100">
      <h1 class="mb-0">
        Suryansh
        <span class="text-primary">Sharma</span>
      </h1>
      <div class="subheading mb-5">
                Delft, The Netherlands · (+31) 617688906 ·
        <a
          href="mailto:suryansh@evilscientist.cc"
        >suryansh@evilscientist.cc</a>
      </div>
      <p
        class="lead mb-5">I am an embedded systems master student at Delft University of Technology who likes to make internet connected and wireless devices. I am passionate about hands-on experimentation and prototyping and am avid 'maker'. I aim to pursue a career in research and development while also volunteering my time and brain for societal benfit. I like interacting with people and do fairly well in international settings. If you are interested in paying me money to make embedded systems for you or if you have a world changing idea that can help people / plants / animals / space amoebas, reach out to me through any of the link below!
      </p>
      <div class="social-icons">
        <a href="https://linkedin.com/in/suryanshsharma" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'linkedin']"/></a>
        <a href="https://github.com/evil-scientist" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'github']"/></a>
        <a href="https://www.facebook.com/suryanshsharma11" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'facebook']"/></a>
        <a href="https://t.me/evilscientist" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'telegram']"/>
        </a>
      </div>
      <br><br>
      <p class="lead mb-5">(If you prefer the offline version, you can download my resume here: 
        <a href="/assets/documents/Resume-SuryanshSharma.pdf"
          target="_blank"
          rel="noopener noreferrer">Offline Resume</a> or if you are a researcher; the more extensive <a
          href="/assets/documents/CV-SuryanshSharma.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >Acamedic CV)</a>
      </p>

    </div>
  </section>
</template>

<style lang="scss" scoped>

.mb-0 {
  font-size: 5rem;
}

.social-icons a {
  cursor: pointer;
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--secondary);
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 2rem;
  line-height: 3.5rem;
  margin-right: 1rem;

  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: var(--primary);
}
</style>
