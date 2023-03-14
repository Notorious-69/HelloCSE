// import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStarList = defineStore('store', {
  state: () => ({
    starList: [
      {
        id: 0,
        firstName: 'Angelina',
        lastName: 'Jolie',
        description: `Angelina Jolie is an American actress, filmmaker, and humanitarian. Born in Los Angeles, California, Jolie made her acting debut in the film "Cyborg 2" in 1993. She gained widespread recognition for her role in the 1999 movie "Girl, Interrupted," for which she won an Academy Award for Best Supporting Actress. Jolie has since starred in numerous films, including "Lara Croft: Tomb Raider," "Mr. and Mrs. Smith," and "Maleficent." She has received numerous awards for her acting, including two Screen Actors Guild Awards, three Golden Globe Awards, and an Academy Award. In addition to her acting career, Jolie is known for her humanitarian work. She served as a Goodwill Ambassador for the United Nations High Commissioner for Refugees and founded the Jolie-Pitt Foundation with her former husband, Brad Pitt.        `,
        photo: 'jolie.jpg'
      },
      {
        id: 1,
        firstName: 'Beyonce',
        lastName: 'Knowles',
        description: `Beyoncé Knowles is an American singer, songwriter, and actress. Born in Houston, Texas, Knowles began her career in the 1990s as the lead singer of the R&B group Destiny's Child. The group achieved massive success with hits such as "Say My Name," "Survivor," and "Bootylicious." Knowles launched a successful solo career in the 2000s and has released numerous hit albums and singles, including "Crazy in Love," "Irreplaceable," and "Formation." Knowles has won numerous awards for her music, including 28 Grammy Awards, and has also acted in movies such as "Dreamgirls" and "The Lion King."`,
        photo: 'beyonce.jpg'
      },
      {
        id: 2,
        firstName: 'Jennifer',
        lastName: 'Aniston',
        description: `Jennifer Aniston is an American actress known for her role as Rachel Green on the popular television show "Friends." Born in Sherman Oaks, California, Aniston began her acting career in the late 1980s and gained widespread recognition for her role on "Friends," which aired from 1994 to 2004. She has also appeared in movies such as "Marley & Me," "The Break-Up," and "Horrible Bosses." Aniston has won numerous awards for her acting, including an Emmy Award, a Golden Globe Award, and a Screen Actors Guild Award.`,
        photo: 'aniston.jpg'
      },
      {
        id: 3,
        firstName: 'Leonardo',
        lastName: 'DiCaprio',
        description: `Leonardo DiCaprio is an American actor and producer. Born in Los Angeles, California, DiCaprio began his acting career in the late 1980s and gained widespread recognition for his role in the 1997 film "Titanic." He has since starred in numerous films, including "The Aviator," "The Departed," and "The Revenant." DiCaprio has received numerous awards for his acting, including an Academy Award and three Golden Globe Awards. DiCaprio is also an environmental activist and has worked to raise awareness about climate change.`,
        photo: 'dicaprio.jpg'
      },
      {
        id: 4,
        firstName: 'Jude',
        lastName: 'Law',
        description: `Jude Law is an English actor. Born in London, England, Law began his acting career in the early 1990s and gained widespread recognition for his role in the 1999 film "The Talented Mr. Ripley." He has since starred in numerous films, including "Cold Mountain," "Closer," and "Sherlock Holmes." Law has received numerous awards for his acting, including two Academy Award nominations and a Golden Globe Award. Law is also a stage actor and has appeared in numerous productions in London's West End.`,
        photo: 'law.jpg'
      },
      {
        id: 5,
        firstName: 'Megan',
        lastName: 'Fox',
        description: `Megan Fox is an American actress. Born in Oak Ridge, Tennessee, Fox began her acting career in the early 2000s and gained widespread recognition for her role in the 2007 film "Transformers." She has since starred in numerous films, including "Jennifer's Body," "Teenage Mutant Ninja Turtles," and "Jonah Hex." Fox is also known for her modeling career and has appeared in magazines such as Maxim and FHM.

        In addition to her acting and modeling career, Fox is also known for her philanthropic work. She has supported various charities, including the American Foundation for AIDS Research, St. Jude Children's Research Hospital, and the Red Cross. Fox has also been an advocate for environmental causes and has promoted eco-friendly practices.`,
        photo: 'fox.jpg'
      },
      {
        id: 6,
        firstName: 'Nicole',
        lastName: 'Kidman',
        description: `Nicole Kidman is an Australian actress and producer. Born in Honolulu, Hawaii, Kidman began her acting career in Australia in the late 1980s and gained international recognition for her role in the 1989 film "Dead Calm." She has since starred in numerous films, including "Moulin Rouge!," "The Hours," and "Big Little Lies." Kidman has won numerous awards for her acting, including an Academy Award, a Golden Globe Award, and a Primetime Emmy Award. In addition to her acting career, Kidman is also a Goodwill Ambassador for UNICEF and has supported various charitable causes, including children's health and human rights.`,
        photo: 'kidman.jpg'
      },
      {
        id: 7,
        firstName: 'Robert',
        lastName: 'Pattinson',
        description: `Robert Pattinson is an English actor. Born in London, England, Pattinson began his acting career in the early 2000s and gained widespread recognition for his role as Edward Cullen in the "Twilight" film series. He has since starred in numerous films, including "Water for Elephants," "The Rover," and "Tenet." Pattinson has received critical acclaim for his acting, including nominations for the Golden Globe Award and the BAFTA Award. In addition to his acting career, Pattinson is also a musician and has released music under the name Bobby Dupea.`,
        photo: 'pattinson.jpg'
      },
      {
        id: 8,
        firstName: 'Robert',
        lastName: 'Redford',
        description: `Robert Redford is an American actor, director, and producer. Born in Santa Monica, California, Redford began his acting career in the 1960s and gained widespread recognition for his roles in films such as "Butch Cassidy and the Sundance Kid" and "The Sting." He has also directed numerous films, including "Ordinary People" and "A River Runs Through It." Redford has received numerous awards for his acting and directing, including an Academy Award, a Golden Globe Award, and the Presidential Medal of Freedom. He is also known for his environmental activism and founded the Sundance Institute, which supports independent filmmaking.`,
        photo: 'redford.jpg'
      },
      {
        id: 9,
        firstName: 'Selena',
        lastName: 'Gomez',
        description: `Selena Gomez is an American singer, actress, and producer. Born in Grand Prairie, Texas, Gomez began her career as a child actor on the Disney Channel's "Barney & Friends." She gained widespread recognition for her role in the Disney Channel series "Wizards of Waverly Place," which aired from 2007 to 2012. Gomez has also released numerous hit albums and singles, including "Come & Get It," "Good for You," and "Lose You to Love Me." In addition to her music and acting career, Gomez is also an executive producer and has worked on the Netflix series "13 Reasons Why" and "Living Undocumented." She is also known for her philanthropic work and has supported various charitable causes, including UNICEF and the Lupus Research Alliance.`,
        photo: 'gomez.jpg'
      }
    ]
  }),
  actions: {
    addStar(firstName, lastName, photo, description) {
      this.starList.push({ firstName, lastName, photo, description })
    },
    deleteStar(itemID) {
      this.starList = this.starList.filter((object) => {
        return object.id !== itemID
      })
    }
  }
})
