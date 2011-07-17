mondrian.stores.pages = new Ext.data.Store({

    model: Ext.regModel('', {
        fields: [
            {name:'id', type:'int'},
            {name:'title', type:'string'},
            {name:'content', type:'string'}
        ]
    }),

    data: [
        {id: 1, title: 'Introduction', content:
            "<p>Pieter Cornelis 'Piet' Mondriaan (after 1912, Mondrian); March 7, 1872 - February 1, 1944), was a Dutch painter.</p>" +
            "<p>He was an important contributor to the De Stijl art movement and group, which was founded by Theo van Doesburg. He evolved a non-representational form which he termed Neo-Plasticism. This consisted of white ground, upon which was painted a grid of vertical and horizontal black lines and the three primary colors.</p>" +
            "<p>Between his 1905 painting, The River Amstel, and his 1907 Amaryllis, Mondrian changed the spelling of his signature from Mondriaan to Mondrian.</p>" +
            "<p>Mondrian was born in Amersfoort in The Netherlands, the second of his parents' children. He was descended from Christian Dirkzoon Monderyan who lived in the Hague as early as 1670. The family moved to Winterswijk when his father, Pieter Cornelius Mondriaan, was appointed head teacher at a local primary school. Mondrian was introduced to art from a very early age: his father was a qualified drawing teacher, and with his uncle, Fritz Mondriaan (a pupil of Willem Maris of The Hague School of artists), the younger Piet often painted and drew along the river Gein.</p>" +
            "<p>After a strictly Protestant upbringing, in 1892, Mondrian entered the Academy for Fine Art in Amsterdam. He already was qualified as a teacher. He began his career as a teacher in primary education, but while teaching he also practiced painting. Most of his work from this period is naturalistic or impressionistic, consisting largely of landscapes. These pastoral images of his native country depict windmills, fields, and rivers, initially in the Dutch Impressionist manner of the Hague School and then in a variety of styles and techniques documenting his search for a personal style. These paintings are most definitely representational, and illustrate the influence that various artistic movements had on Mondrian, including pointillism and the vivid colors of fauvism.</p>" +
            "<p>On display in The Hague's Gemeentemuseum are a number of paintings from this period, including such post-impressionist works as The Red Mill and Trees in Moonrise. Another painting, Evening (Avond) (1908), a scene of haystacks in a field at dusk, even augurs future developments by using a palette consisting almost entirely of red, yellow, and blue. Although it is in no sense abstract, Avond is the earliest of Mondrian's works to emphasize the primary colors.</p>" +
            "<p>The earliest paintings that show an inkling of the abstraction to come are a series of canvases from 1905 to 1908, which depict dim scenes of indistinct trees and houses with reflections in still water. Although the end result leads the viewer to begin emphasizing the forms over the content, these paintings are still firmly rooted in nature, and it is only the knowledge of Mondrian's later achievements that leads one to search for the roots of his future abstraction in these works.</p>" +
            "<p>Mondrian's art always was intimately related to his spiritual and philosophical studies. In 1908 he became interested in the theosophical movement launched by Helena Petrovna Blavatsky in the late 19th century, and he joined the Dutch branch of the Theosophical Society in 1909. The work of Blavatsky and a parallel spiritual movement, Rudolf Steiner's Anthroposophy, significantly affected the further development of his aesthetic. Blavatsky believed that it was possible to attain a more profound knowledge of nature than that provided by empirical means, and much of Mondrian's work for the rest of his life was inspired by his search for that spiritual knowledge.</p>" +
            "<p>Mondrian and his later work were deeply influenced by the 1911 Moderne Kunstkring exhibition of Cubism in Amsterdam. His search for simplification is shown in two versions of Still Life with Ginger Pot (Stilleven met Gemberpot). The 1911 version is Cubist, in the 1912 version it is reduced to a round shape with triangles and rectangles.</p>"
        },
        {id: 2, title: 'Cubism', content:
            "<p>In 1911, Mondrian moved to Paris and changed his name (dropping an 'a' from Mondriaan) to emphasize his departure from The Netherlands. This matched the changed signature on his works that is dated to before 1907. While in Paris, the influence of the Cubism style of Picasso and Georges Braque appeared almost immediately in Mondrian's work. Paintings such as The Sea (1912) and his various studies of trees from that year still contain a measure of representation, but increasingly, they are dominated by the geometric shapes and interlocking planes commonly found in Cubism. While Mondrian was eager to absorb the Cubist influence into his work, however, it seems clear that he saw Cubism as 'port of call' on his artistic journey, rather than as a destination.</p>" +
            "<p>Unlike the Cubists, Mondrian still attempted to reconcile his painting with his spiritual pursuits, and in 1913, he began to fuse his art and his theosophical studies into a theory that signaled his final break from representational painting. World War I began while Mondrian was visiting home in 1914 and he was forced to remain in the Netherlands for the duration of the conflict. During this period, he stayed at the Laren artist's colony, there meeting Bart van der Leck and Theo van Doesburg. Both of these artists were undergoing their own personal journeys toward abstraction at the time. Van der Leck's use of only primary colors in his art greatly influenced Mondrian. After a meeting with Van der Leck in 1916, Mondrian wrote, 'My technique which was more or less Cubist, and therefore more or less pictorial, came under the influence of his precise method.' With Van Doesburg, Mondrian founded De Stijl (The Style), a journal of the De Stijl group in which he published his first essays defining his theory, for which he adopted the term neoplasticism.</p>" +
            "<p>Mondrian published 'De Nieuwe Beelding in de schilderkunst' ('The New Plastic in Painting')in twelve installments during 1917 and 1918. This was his first major attempt to express his artistic theory in writing. Mondrian's best and most often-quoted expression of this theory, however, comes from a letter he wrote to H. P. Bremmer in 1914:</p>" +
            "<p><quote>I construct lines and color combinations on a flat surface, in order to express general beauty with the utmost awareness. Nature (or, that which I see) inspires me, puts me, as with any painter, in an emotional state so that an urge comes about to make something, but I want to come as close as possible to the truth and abstract everything from that, until I reach the foundation (still just an external foundation!) of things...</quote></p>" +
            "<p><quote>I believe it is possible that, through horizontal and vertical lines constructed with awareness, but not with calculation, led by high intuition, and brought to harmony and rhythm, these basic forms of beauty, supplemented if necessary by other direct lines or curves, can become a work of art, as strong as it is true.</quote></p>"
        },
        {id: 3, title: 'Minimalism', content:
            "<p>When the war ended in 1919, Mondrian returned to France, where he would remain until 1938. Immersed in the crucible of artistic innovation that was post-war Paris, he flourished in an atmosphere of intellectual freedom that enabled him to embrace an art of pure abstraction for the rest of his life. Mondrian began producing grid-based paintings in late 1919, and in 1920, the style for which he came to be renowned began to appear.</p>" +
            "<p>In the early paintings of this style the lines delineating the rectangular forms are relatively thin, and they are gray, not black. The lines also tend to fade as they approach the edge of the painting, rather than stopping abruptly. The forms themselves, smaller and more numerous than in later paintings, are filled with primary colors, black, or gray, and nearly all of them are colored; only a few are left white.</p>" +
            "<p>During late 1920 and 1921, Mondrian's paintings arrive at what is their definitive and mature form to casual observers. Thick black lines now separate the forms, which are larger and fewer in number, and more of them are left white than was previously the case. This was not the culmination of his artistic evolution, however. Although the refinements became more subtle, Mondrian's work continued to evolve during his years in Paris.</p>" +
            "<p>In the 1921 paintings, many of the black lines (but not all of them) stop short at a seemingly arbitrary distance from the edge of the canvas, although the divisions between the rectangular forms remain intact. Here too, the rectangular forms remain mostly colored. As the years passed and Mondrian's work evolved further, he began extending all of the lines to the edges of the canvas and he also began to use fewer and fewer colored forms, favoring white instead.</p>" +
            "<p>These tendencies are particularly obvious in the 'lozenge' works that Mondrian began producing with regularity in the mid-1920s. The 'lozenge' paintings are square canvases tilted 45 degrees, so that they hang in a diamond shape. Typical of these is Schilderij No. 1: Lozenge With Two Lines and Blue (1926), also known as Composition With Blue and Composition in White and Blue, which is currently on display at the Philadelphia Museum of Art. One of the most minimal of Mondrian's canvases, this painting consists only of two black, perpendicular lines and a small triangular form, colored blue. The lines extend all the way to the edges of the canvas, almost giving the impression that the painting is a fragment of a larger work.</p>" +
            "<p>Although one is hampered by the glass protecting the painting, and by the toll that age and handling have obviously taken on the canvas, a close examination of this painting begins to reveal something of the artist's method. Mondrian's paintings are not composed of perfectly flat planes of color, as one might expect. Brush strokes are evident throughout, although they are subtle, and the artist appears to have used different techniques for the various elements.</p>" +
            "<p>The black lines are the flattest elements, with the least amount of depth. The colored forms have the most obvious brush strokes, all running in one direction. Most interesting, however, are the white forms, which clearly have been painted in layers, using brush strokes running in different directions. This generates a greater sense of depth in the white forms, as though they are overwhelming the lines and the colors, which indeed they were, as Mondrian's paintings of this period came to be increasingly dominated by white space.</p>" +
            "<p>Schilderij No. 1 may be the most extreme extent of Mondrian's minimalism. As the years progressed, lines began to take precedence over forms in his painting. In the 1930s, he began to use thinner lines and double lines more frequently, punctuated with a few small colored forms, if any at all. Double lines particularly excited Mondrian, for he believed they offered his paintings a new dynamism which he was eager to explore.</p>"
        },
        {id: 4, title: 'Later work', content:
            "<p>In September 1938, Mondrian left Paris in the face of advancing fascism and moved to London. After the Netherlands were invaded and Paris fell in 1940, he left London for Manhattan, where he would remain until his death. Some of Mondrian's later works are difficult to place in terms of his artistic development, because there were quite a few canvases that he began in Paris or London which he only completed months or years later in Manhattan. The finished works from this later period demonstrate an unprecedented business, however, with more lines than any of his work since the 1920s, placed in an overlapping arrangement that is almost cartographical in appearance. He spent many long hours painting on his own until his hands blistered and he sometimes cried or made himself sick.</p>" +
            "<p>Mondrian produced Lozenge Composition With Four Yellow Lines (1933), a simple painting that introduced what for him was a shocking innovation: thick, colored lines instead of black ones. After that one painting, this practice remained dormant in Mondrian's work until he arrived in Manhattan, at which time he began to embrace it with abandon. In some examples of this new direction, such as Composition (1938) / Place de la Concorde (1943), he appears to have taken unfinished black-line paintings from Paris and completed them in New York by adding short perpendicular lines of different colors, running between the longer black lines, or from a black line to the edge of the canvas. The newly-colored areas are thick, almost bridging the gap between lines and forms, and it is startling to see color in a Mondrian painting that is unbounded by black. Other works mix long lines of red amidst the familiar black lines, creating a new sense of depth by the addition of a colored layer on top of the black one.</p>" +
            "<p>The new canvases that Mondrian began in Manhattan are even more startling, and indicate the beginning of a new idiom that was cut short by the artist's death. New York City (1942) is a complex lattice of red, blue, and yellow lines, occasionally interlacing to create a greater sense of depth than his previous works. An unfinished 1941 version of this work uses strips of painted paper tape, which the artist could rearrange at will to experiment with different designs.</p>" +
            "<p>His painting Broadway Boogie-Woogie (1942-43) at The Museum of Modern Art in Manhattan was highly influential in the school of abstract geometric painting. The piece is made up of a number of shimmering squares of bright color that leap from the canvas, then appear to shimmer, drawing the viewer into those neon lights. In this painting and the unfinished Victory Boogie Woogie (1942-44), Mondrian replaced former solid lines with lines created from small adjoining rectangles of color, created in part by using small pieces of paper tape in various colors. Larger unbounded rectangles of color punctuate the design, some with smaller concentric rectangles inside them. While Mondrian's works of the 1920s and 1930s tend to have an almost scientific austerity about them, these are bright, lively paintings, reflecting the upbeat music that inspired them and the city in which they were made.</p>" +
            "<p>In these final works, the forms have indeed usurped the role of the lines, opening another new door for Mondrian's development as an abstractionist. The Boogie-Woogie paintings were clearly more of a revolutionary change than an evolutionary one, representing the most profound development in Mondrian's work since his abandonment of representational art in 1913.</p>" +
            "<p>In 2008 the Dutch television program Andere Tijden found the only known movie footage with Mondrian. The discovery of the film footage was announced at the end of a two-year research program on the Victory Boogie Woogie. The research found that the painting was in very good condition and that Mondrian painted the composition in one session. It also was found that the composition was changed radically by Mondrian shortly before his death by using small pieces of colored tape.</p>" +
            "<p>When 47-year-old Piet Mondrian left the Netherlands for unfettered Paris for the second and last time in 1919, he set about at once to make his studio a nurturing environment for paintings he had in mind that would increasingly express the principles of Neo-Plasticism about which he had been writing for two years. To hide the studio's structural flaws quickly and inexpensively, he tacked up large rectangular placards, each in a single color or neutral hue. Smaller colored paper squares and rectangles, composed together, accented the walls. Then came an intense period of painting. Then again he addressed the walls, repositioning the colored cutouts, adding to their number, altering the dynamics of color and space, producing new tensions and equilibrium. Before long, he had established a creative schedule in which a period of painting took turns with a period of experimentally regrouping the smaller papers on the walls, a process that directly fed the next period of painting. It was a pattern he followed for the rest of his life, through wartime moves from Paris to London's Hampstead in 1938 and 1940, across the Atlantic to Manhattan.</p>" +
            "<p>At the age of 71 in the fall of 1943, Mondrian moved into his second and final Manhattan studio at 15 East 59th Street, and set about to recreate the environment he had learned over the years was most congenial to his modest way of life and most stimulating to his art. He painted the high walls the same off-white he used on his easel and on the seats, tables and storage cases he designed and fashioned meticulously from discarded orange and apple-crates. He glossed the top of a white metal stool in the same brilliant primary red he applied to the cardboard sheath he made for the radio-phonograph that spilled forth his beloved jazz from well-traveled records. Visitors to this last studio seldom saw more than one or two new canvases, but found, often to their astonishment, that eight large compositions of colored bits of paper he had tacked and re-tacked to the walls in ever-changing relationships constituted together an environment that, paradoxically and simultaneously, was both kinetic and serene, stimulating and restful. It was the best space, Mondrian said, that he had ever inhabited. Tragically, he was there for only a few months, as he died of pneumonia in February 1944.</p>" +
            "<p>After his death, Mondrian's friend and sponsor in Manhattan, artist Harry Holtzman, and another painter friend, Fritz Glarner, carefully documented the studio on film and in still photographs before opening it to the public for a six-week exhibition. Before dismantling the studio, Holtzman (who was also Mondrian's heir) traced the wall compositions precisely, prepared exact portable facsimiles of the space each had occupied, and affixed to each the original surviving cut-out components. These portable Mondrian compositions have become known as 'The Wall Works'. They have been exhibited twice since Mondrian's death at Manhattan's Museum of Modern Art (1983/1995-96), once in Soho at The Carpenter + Hochman Gallery (1984), once each at Galerie Tokoro in Tokyo, Japan (1993), the XXII Biennial of Sao Paulo (1994), The University of Michigan (1995) and, the first time to be shown in Europe, at the Akademie der Kunste (Academy of The Arts), in Berlin (February 22 - April 22, 2007).</p>"
        }
    ]

});