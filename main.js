// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

// Cleans up and capitalizes the names of the animals
function cleanAndCap (str){
  if(!str) return null
  let temp = str.trim()
  return temp[0].toUpperCase() + temp.substring(1)
}

// Assigning the variables with values used in the story
const personality = cleanAndCap(words.get('personality-1'));

const answer = (words.get('answer'));
const conjunction = answer === 'can set goals' ? 'will surely' : 'may not';

const tanswer = words.get('teachern');
const wonder = tanswer === 'no' ? 'is definitely' : 'cannot be from';
const superb = tanswer === 'no' ? 'disliked' : 'wonderful';

const percentage = words.get('percentage-1');

const goodness = percentage === '0-20%' ? 'dismal' : '';
const love = percentage === '20-40%' ? 'terrible' : '';
const forty = percentage === '40-60%' ? 'decent' : '';
const sixty = percentage === '60-80%' ? 'good' : '';
const eighty = percentage === '80-90%' ? 'superb' : '';
const ninety = percentage === '90-95%' ? 'excellent' : '';
const hundred = percentage === '95-100%' ? 'astonishing' : '';

const lovely = percentage === '0-20%' ? 'unlikely' : '';
const utwenty = percentage === '20-40%' ? 'quite unlikely' : '';
const uforty = percentage === '40-60%' ? 'rather unlikely' : '';
const usixty = percentage === '60-80%' ? 'likely' : '';
const ueighty = percentage === '80-90%' ? 'quite likely' : '';
const uninety = percentage === '90-95%' ? 'extremely likely' : '';
const uhundred = percentage === '95-100%' ? 'supremely likely' : '';



const name = cleanAndCap(words.get('name-1'));
const adj1 = words.get('adj-1');
const money = words.get('money-1');
const color = words.get('color-1');
const teacher = cleanAndCap(words.get('teacher-1'));
const quote = words.get('quote');
const city = cleanAndCap(words.get('city-2'));
const num1 = words.get('num-1');
const think = words.get('think-1');
const weather = words.get('weather-1');
const num = words.get('num-1');
const shade = words.get('shade-1');
const files = words.get('files-1');
const date = words.get('date-1');
const email = words.get('email-1');
const vol = words.get('vol-1');
const phone = words.get('phone-1');
const appt = words.get('appt-1');
const url = words.get('url-1');

// The string containing HTML and text which will populate the story.html page
const story = `<p>Hello <span class="word" title="id: name-1">${name}</span>! Let's see where you will be in the future. For starters, you will be <span class="word" title="id: money-1">${money}</span> as you enjoy the fruits of your labor!</p>

<p>Despite your <span class="word" title="id: weather-1">${weather}</span>-filled future, you still have potential for earning $<span class="word" title="id: num-1">${num}</span> a year! Wow!</p>

<p>Since you <span class="word" title="id: answer">${answer}</span>, you ${conjunction} be able to fulfill your purpose of "<span class="word" title="id: think-1">${think}</span>!"</p>

<p>Though this assesment may sound like it ${wonder} from <span class="word" title="id: teacher-1">${teacher}</span>, you have the potential to turn around your life and embark on a search for <span class="word" title="id: color-1">${color}</span> pastures.</p>

<p>As a result of your <u><b>${goodness} ${love} ${forty} ${sixty} ${eighty} ${ninety} ${hundred}</b></u> English score, it is <u><b>${lovely} ${utwenty} ${uforty} ${usixty} ${ueighty} ${ninety} ${uhundred}</b></u>  that you will live in <span class="word" title="id: city-2">${city}</span>.</p>

<p>Now, you know how your <span class="word" title="id: personality-1">${personality}</span> life will play out! Congratulate yourself, and thank the ${superb} <span class="word" title="id: teacher-1">${teacher}</span> for where you are today!</p>

<p>Bonus: Your lucky numbers and symbols have been generated for you. They are: <span class="word" title="id: shade-1">${shade}</span>. Also, the date where your dreams may come true will likely be <span class="word" title="id: date-1">${date}</span> (year-month-date).</p>

<p>You will be contacted at <span class="word" title="id: email-1">${email}</span> or <span class="word" title="id: phone-1">${phone}</span>, at <span class="word" title="id: appt-1">${appt}</span> hours as a result of your feedback. See you @ <span class="word" title="id: url-1">${url}</span>.</p>`;

// Grabbing the title element
const title = document.getElementById('title');
// Populating the title element with text
title.innerHTML = `Your <span class="word" title="id: personality-1">${personality}</span> Life of  <span class="word" title="id: percentage-1">${percentage}</span> Fulmillment! `;

// Grabbing the story element
const storyEl = document.getElementById('story');
// Populating the story element with the value of the story variable
storyEl.innerHTML = story;

// Grabbing the moral-message element
const moralMessage = document.getElementById('moral-message');
// Populating the moral-message element with text
moralMessage.innerHTML = `<span class="italics" title="id: think-1">"${think}"</span>`;