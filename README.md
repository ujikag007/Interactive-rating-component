# Interactive Rating Component

A clean, responsive, and accessible interactive rating component built with HTML, CSS, and modern JavaScript. Users can select a rating score from 1 to 5, submit their choice, and view a dedicated "Thank You" state with their selection.

This project is a solution to the [Interactive Rating Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-k-2db budgetary/hub).

---

## 🌟 Features

- **Interactive Rating:** Select a score from 1 to 5 with clear visual feedback for hover, active, and focus states.
- **Dynamic State Toggle:** Seamlessly transition from the rating state to a card-style "Thank You" confirmation state without page reloads.
- **Full Responsiveness:** Optimized for both mobile devices (375px) and desktop screens (1440px+).
- **Accessibility (a11y):** Built using semantic HTML (`<fieldset>`, `<legend>`, `<input type="radio">`), keyboard navigation, and visible focus indicators.
- **Clean Animations:** Smooth transitions for hover effects and card submission transitions.

---

## 🛠️ Built With

- **HTML5:** Semantic markup (`<fieldset>`, `<legend>`, `<input type="radio">`)
- **CSS3:** Flexbox, Custom Properties (CSS Variables), BEM methodology
- **JavaScript (ES6+):** DOM manipulation, Event handling, ARIA dynamic updates
- **Mobile-First Workflow:** Responsive design from mobile upwards

---

## 📁 Project Structure

```text
interactive-rating-component/
│
├── index.html            # Main HTML markup
├── style.css             # Main stylesheet (CSS variables & layout)
├── script.js            # Interactive rating logic & DOM updates
├── README.md             # Project documentation
│
├── SVGs and graphics
│   ├── icon-star.svg
│   └── illustration-thank-you.svg
```

---

## ⚙️ How It Works

1. **HTML Structure:** The rating options are rendered as accessible standard `<input type="radio">` buttons styled customly via standard CSS.
2. **Form Submission:** When the user clicks **Submit**:
   - The script prevents standard form submission (`e.preventDefault()`).
   - Checks if a rating option has been selected.
   - If selected, populates the selection result text (`"You selected X out of 5"`).
   - Hides the rating card and displays the thank you card with a smooth visual transition.
3. **Error Handling:** If no rating is chosen when clicking Submit, a subtle visual indicator prompts the user to pick a rating first.

---
## 💡 Key Learnings

Building this project helped reinforce key front-end concepts:

- **Accessible Forms:** Using native radio buttons wrapped in `<fieldset>`/`<legend>` ensures screen readers announce rating choices correctly.
- **CSS Custom Properties:** Organizing theme colors using CSS variables made managing hover states and background tints effortless:
  ```css
  :root {
    --clr-orange: hsl(25, 97%, 53%);
    --clr-white: hsl(0, 0%, 100%);
    --clr-light-grey: hsl(217, 12%, 63%);
    --clr-dark-blue: hsl(213, 19%, 18%);
    --clr-very-dark-blue: hsl(216, 12%, 8%);
  }
  ```
- **DOM State Toggling:** Efficiently swapping UI states in plain JavaScript using `element.classList.toggle()` or setting the `hidden` attribute.

---

## 📄 License

Copyright (c) 2026 ujikag007

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files(the  "software"), to deal in the software without restriction...
