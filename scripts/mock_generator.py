import random
import datetime
import os
import sys

# ---------------------------------------------------------
# IMPORT STATIC DATA STORE
# ---------------------------------------------------------
try:
    from question_bank import APTITUDE_DB
except ImportError:
    print("[FATAL ERROR] question_bank.py not found. Ensure both files are in the same directory.")
    sys.exit(1)

class StaticMockEngine:
    def __init__(self, output_dir="."):
        """
        Initializes the simulation engine.
        :param output_dir: Directory where the Markdown mock tests will be saved.
        """
        self.output_dir = output_dir
        self.db = APTITUDE_DB
        
        # Ensure the output directory exists
        if not os.path.exists(self.output_dir):
            os.makedirs(self.output_dir)

    def generate_test(self, num_questions=15):
        """
        Compiles a randomized Markdown exam from the static database.
        """
        date_str = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M")
        filename = os.path.join(self.output_dir, f"Mock_Test_{date_str}.md")
        
        # Filter out topics that don't have any questions yet
        active_modules = [topic for topic, questions in self.db.items() if len(questions) > 0]
        
        if not active_modules:
            print("[ERROR] The APTITUDE_DB is empty. Populate question_bank.py first.")
            return

        print(f"[SYSTEM] Compiling mock test from {len(active_modules)} active modules...")

        # Select and shuffle topics
        selected_topics = random.choices(active_modules, k=num_questions)
        random.shuffle(selected_topics)

        with open(filename, "w", encoding="utf-8") as file:
            # 1. Compile Header
            file.write(f"# Phase 4 Exam Simulation\n\n")
            file.write(f"**Compilation Date:** {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
            file.write(f"**Target Execution Time:** {num_questions} Minutes\n")
            file.write(f"**Total Questions:** {num_questions}\n\n")
            file.write("---\n\n")
            
            answers_block = []
            
            # 2. Compile Questions (Tags Removed)
            for i, topic in enumerate(selected_topics, start=1):
                q_data = random.choice(self.db[topic])
                
                # Removed the [topic] tag to force blind context-switching
                file.write(f"### Question {i}\n")
                file.write(f"{q_data['question']}\n\n")
                
                # Formatted with native Markdown blockquotes for a cleaner UI
                answers_block.append(f"**Q{i}:** {q_data['answer']}\n> {q_data['hint']}\n")
                
            # 3. Compile Hidden Debugging Key (Markdown Parser Fix)
            file.write("---\n## 🛡️ Debugging & Answer Key\n\n")
            file.write("<details>\n")
            # Crucial fix: Added a double newline after the summary tag to re-enable markdown parsing
            file.write("<summary><b>Reveal Solutions (Do not click until execution is complete)</b></summary>\n\n")
            
            for ans in answers_block:
                file.write(f"{ans}\n")
                
            file.write("</details>\n")
            
        print(f"[SUCCESS] Execution complete. Mock test compiled at: {filename}")

if __name__ == "__main__":
    # Instantiate the engine
    engine = StaticMockEngine()
    
    # Run the compilation (Change this number to generate longer or shorter tests)
    engine.generate_test(num_questions=15)