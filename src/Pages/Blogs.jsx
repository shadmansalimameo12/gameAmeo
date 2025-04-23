import React from 'react';

const Blogs = () => {
    return (
        <div className="py-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">React FAQs</h1>
            
            <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-3">1. What is `useState` and how does it work in React?</h2>
                    <p className="text-gray-700">
                        `useState` is a React Hook that lets functional components manage state. It returns an array with two elements: the current state value and a function to update that value. When the state updating function is called, React re-renders the component with the new state value.
                    </p>
                    <p className="text-gray-700 mt-3">
                        For example: <code>const [count, setCount] = useState(0)</code> initializes a state variable "count" with the value 0 and provides a function "setCount" to update it. Whenever setCount is called with a new value, React will re-render the component with the updated state.
                    </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-3">2. What is the purpose of `useEffect` in React?</h2>
                    <p className="text-gray-700">
                        `useEffect` is a Hook that lets you perform side effects in functional components. Side effects include data fetching, subscriptions, manual DOM manipulations, and other operations that need to happen after rendering.
                    </p>
                    <p className="text-gray-700 mt-3">
                        `useEffect` takes two arguments: a function containing the effect code, and an optional dependency array. The effect runs after every render if no dependency array is provided, only on the first render if the dependency array is empty, or whenever dependencies in the array change.
                    </p>
                    <p className="text-gray-700 mt-3">
                        It helps separate the rendering logic from the side effect logic, making components easier to understand and test.
                    </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-3">3. What is a custom hook in React and when should you use one?</h2>
                    <p className="text-gray-700">
                        A custom hook is a JavaScript function that starts with "use" and may call other hooks. It lets you extract component logic into reusable functions.
                    </p>
                    <p className="text-gray-700 mt-3">
                        You should use custom hooks when:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2">
                        <li>You have complex logic that's used across multiple components</li>
                        <li>You want to reuse stateful logic between components without changing their structure</li>
                        <li>You need to organize component code better by extracting related logic</li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                        Examples include hooks for form handling, data fetching, animations, or any other reusable behavior.
                    </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-3">4. Difference between controlled and uncontrolled components? Which one is better?</h2>
                    <p className="text-gray-700">
                        <strong>Controlled Components:</strong> Form elements whose values are controlled by React state. Every state mutation has an associated handler function. React is the "single source of truth" for these elements.
                    </p>
                    <p className="text-gray-700 mt-3">
                        <strong>Uncontrolled Components:</strong> Form elements that maintain their own internal state. Data is handled by the DOM itself, and you use refs to get values when needed.
                    </p>
                    <p className="text-gray-700 mt-3">
                        <strong>Which is better?</strong> It depends on the use case:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2">
                        <li>Controlled components are better for forms requiring immediate validation, conditional rendering based on input, or when you need to know the input state at any time.</li>
                        <li>Uncontrolled components are simpler for basic forms, reduce code for simple inputs, and can be better for performance in some cases.</li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                        The React team generally recommends controlled components as a best practice in most scenarios.
                    </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-3">5. Tell us something about `useFormStatus()`</h2>
                    <p className="text-gray-700">
                        `useFormStatus` is a React hook introduced in React 18 as part of the React DOM package. It provides form state information when using the Form Actions API.
                    </p>
                    <p className="text-gray-700 mt-3">
                        Key features include:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2">
                        <li>It returns information about the last form submission, such as whether the form is currently submitting.</li>
                        <li>The primary returned value is `pending`, a boolean indicating if the form submission is in progress.</li>
                        <li>It helps create responsive UIs during form submissions, like disabling buttons or showing loading indicators.</li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                        Example usage:
                    </p>
                    <pre className="bg-gray-100 p-3 rounded mt-2 text-sm overflow-x-auto">
{`import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit">
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}`}
                    </pre>
                    <p className="text-gray-700 mt-3">
                        Important: This hook must be used within a form component that uses the Form Actions API, and it only works with the built-in form actions, not with custom event handlers.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;