const HIGHLIGHTS = [
  {
    title: 'Organic Farming',
    text: 'Chemical-free farming practices that produce healthy, flavorful, and environmentally friendly coffee and cocoa.',
  },
  {
    title: 'Premium Coffee',
    text: 'Carefully selected Arabica and Robusta beans roasted to perfection for a rich aroma and exceptional taste.',
  },
  {
    title: 'Fine Cocoa',
    text: 'Premium organic cocoa beans processed with international quality standards for chocolates and beverages.',
  },
]

export default function About() {
  return <section className="about" id="about">
    <div className="about__inner shell">
      <p className="about__eyebrow">Our roots</p>
      <h2 className="about__title">About COCOBREW</h2>
      <p className="about__intro">Located in the scenic Araku Valley, our chocolate factory transforms organically grown cocoa beans and coffee beans into premium handcrafted chocolates. Every product is prepared using sustainable farming practices that protect nature while supporting local tribal communities.</p>
      <div className="about__grid">{HIGHLIGHTS.map(item => <article className="about__card" key={item.title}><span className="about__number">0{HIGHLIGHTS.indexOf(item) + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
    </div>
  </section>
}
