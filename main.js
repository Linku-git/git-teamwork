
// Articles database - each student adds their article here
const articles = [
    {
        id: 'article-1',
        title: 'Getting Started with Git',
        author: 'Example Student',
        created: 'October 5, 2025',
        excerpt: 'Learn the basics of Git version control and how to collaborate with your team effectively.',
        image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800',
        content: `
            <h2>Introduction to Git</h2>
            <p>Git is a distributed version control system that helps teams collaborate on code. It allows multiple developers to work on the same project simultaneously without conflicts.</p>
            
            <h3>Why Use Git?</h3>
            <p>Git provides several benefits:</p>
            <ul>
                <li>Track changes in your code over time</li>
                <li>Collaborate with team members efficiently</li>
                <li>Revert to previous versions if needed</li>
                <li>Work on different features in parallel using branches</li>
            </ul>
            
            <h3>Basic Git Commands</h3>
            <p>Here are some essential Git commands:</p>
            <ul>
                <li><strong>git clone:</strong> Copy a repository to your local machine</li>
                <li><strong>git add:</strong> Stage changes for commit</li>
                <li><strong>git commit:</strong> Save your changes</li>
                <li><strong>git push:</strong> Upload your changes to the remote repository</li>
                <li><strong>git pull:</strong> Download and merge changes from the remote repository</li>
            </ul>
            
            <p>Mastering Git is essential for modern software development and collaboration!</p>
        `
    }
    // Students add their articles here following the same structure
,{
    id: 'article-2',
    title: 'Getting Started with Python',
    author: 'Ayoub Karim',
    created: 'October 5, 2025',
    excerpt: 'Discover the essentials of Python programming — from setup to core concepts — and learn why it remains one of the most popular languages in the world.',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800',
    content: `
        <h2>Introduction to Python</h2>
        <p>Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum and first released in 1991, Python emphasizes code clarity and productivity, making it ideal for beginners and professionals alike.</p>
        
        <h3>Why Learn Python?</h3>
        <p>Python’s versatility and simplicity make it a great choice for a wide variety of applications:</p>
        <ul>
            <li>Web development (using frameworks like <strong>Django</strong> and <strong>Flask</strong>)</li>
            <li>Data analysis and visualization (<strong>Pandas</strong>, <strong>NumPy</strong>, <strong>Matplotlib</strong>)</li>
            <li>Machine learning and AI (<strong>TensorFlow</strong>, <strong>PyTorch</strong>, <strong>Scikit-learn</strong>)</li>
            <li>Automation and scripting</li>
            <li>Game development and IoT applications</li>
        </ul>
        
        <h3>Setting Up Python</h3>
        <p>To start coding in Python, follow these simple steps:</p>
        <ol>
            <li>Download and install Python from the <a href="https://www.python.org/downloads/">official website</a>.</li>
            <li>Verify the installation by running <code>python --version</code> in your terminal or command prompt.</li>
            <li>Use a code editor or IDE such as <strong>VS Code</strong>, <strong>PyCharm</strong>, or <strong>Jupyter Notebook</strong> for development.</li>
        </ol>

        <h3>Core Python Concepts</h3>
        <p>Before diving deep, it’s important to understand some fundamental Python concepts:</p>
        <ul>
            <li><strong>Variables and Data Types:</strong> Strings, integers, floats, booleans, and lists.</li>
            <li><strong>Control Structures:</strong> If-else statements, loops (for/while), and conditionals.</li>
            <li><strong>Functions:</strong> Reusable blocks of code defined using <code>def</code>.</li>
            <li><strong>Modules and Packages:</strong> Organize and reuse code effectively.</li>
            <li><strong>Object-Oriented Programming:</strong> Classes, objects, and inheritance.</li>
        </ul>

        <h3>Example Code</h3>
        <pre><code class="language-python">
# Simple Python Example
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
        </code></pre>

        <p>This small snippet defines a function called <code>greet()</code> that takes a name as input and prints a personalized message.</p>

        <h3>Conclusion</h3>
        <p>Python is one of the most accessible and powerful programming languages today. Whether you’re automating tasks, analyzing data, or building web apps, mastering Python opens the door to countless opportunities in tech.</p>

        <p>Start your Python journey today — write your first line of code and discover how simple it is to bring your ideas to life!</p>
    `
},
{
    id: 'article-3',
        title: 'Getting Started with Git',
        author: 'Example Student',
        created: 'October 5, 2025',
        excerpt: 'Learn the basics of Git version control and how to collaborate with your team effectively.',
        image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800',
        content: `
            <h2>Introduction to Git</h2>
            <p>Git is a distributed version control system that helps teams collaborate on code. It allows multiple developers to work on the same project simultaneously without conflicts.</p>
            
            <h3>Why Use Git?</h3>
            <p>Git provides several benefits:</p>
            <ul>
                <li>Track changes in your code over time</li>
                <li>Collaborate with team members efficiently</li>
                <li>Revert to previous versions if needed</li>
                <li>Work on different features in parallel using branches</li>
            </ul>
            
            <h3>Basic Git Commands</h3>
            <p>Here are some essential Git commands:</p>
            <ul>
                <li><strong>git clone:</strong> Copy a repository to your local machine</li>
                <li><strong>git add:</strong> Stage changes for commit</li>
                <li><strong>git commit:</strong> Save your changes</li>
                <li><strong>git push:</strong> Upload your changes to the remote repository</li>
                <li><strong>git pull:</strong> Download and merge changes from the remote repository</li>
            </ul>
            
            <p>Mastering Git is essential for modern software development and collaboration!</p>
        `
    }

];

// Function to create article cards
function createArticleCard(article) {
    return `
        <div class="article-card" data-id="${article.id}" onclick="showArticle('${article.id}')">
            <img src="${article.image}" alt="${article.title}" class="article-image">
            <div class="article-content">
                <h2 class="article-title">${article.title}</h2>
                <p class="article-author">By ${article.author}</p>
                <p class="article-created">Created: ${article.created}</p>
                <p class="article-excerpt">${article.excerpt}</p>
                <a href="#" class="read-more" onclick="event.stopPropagation(); showArticle('${article.id}'); return false;">Read More →</a>
            </div>
        </div>
    `;
}

// Function to display all articles
function displayArticles() {
    const grid = document.getElementById('articles-grid');
    grid.innerHTML = articles.map(article => createArticleCard(article)).join('');
}

// Function to show a specific article
function showArticle(articleId) {
    const article = articles.find(a => a.id === articleId);
    if (!article) return;

    const detailContent = document.getElementById('detail-content');
    detailContent.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="detail-image">
        <h1 class="detail-title">${article.title}</h1>
        <p class="detail-author">By ${article.author}</p>
        <p class="detail-created">Created: ${article.created}</p>
        <div class="detail-content">${article.content}</div>
    `;

    document.getElementById('main-page').style.display = 'none';
    document.getElementById('detail-page').classList.add('active');
}

// Function to show main page
function showMainPage() {
    document.getElementById('main-page').style.display = 'block';
    document.getElementById('detail-page').classList.remove('active');
}

// Initialize the page
displayArticles();
