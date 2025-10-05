
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
