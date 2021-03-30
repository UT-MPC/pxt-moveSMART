# ProjectSMART Pedometer Tutorial -- Level 2

## Step 1

In this tutorial, we will learn more about variables.

## Step 2

We need a variable called ``||variables:step||`` to store the number of steps.
On the left below, you will find an icon with four red strips. Click on it, and click on **Make a Variable**, and call the variable **step**.
``||variables:step||`` and two other components will appear.

## Step 3

The first thing we want our @boardname@ to do is to show the number of steps counted.
In other words, we want our @boardname@ to show the number currently saved in ``||variables:step||``.

## Step 4

Instead of relying on ``||moveSMART:show step count||``, this time we will use the ``||basic:show number||`` with our ``||variables:step||`` variable.
Drag ``||basic:show number||`` into the ``||Basic:forever||`` block, and drag ``||variables:step||`` into the circle inside.

## Step 5

Let's allow our @boardname@ to start counting steps and to stop counting steps. Look at the picture on the left. The @boardname@ has two buttons: A and B. When you press A, we'll start counting steps. When you press B, we'll stop counting steps.

## Step 6

Click on the stick figure and look at the choices. On the bottom of the list, you will see ``||moveSMART:is counting||``. It returns a Boolean value that tells you if the step count is currently counting.

## Step 7

When the program detects the @boardname@ is shaken, we want the value of ``||variables:step||`` to increase if and only if we have started counting. For this, we will need ``||Logic:if||``.

## Step 8

The ``||Logic:if||`` block tells the @boardname@ a list of things to do when some conditions are met. In this case, the condition is ``||moveSMART:is counting||``, and the list of things to do is to increase the value saved in ``||variables:step||`` by 1.

## Step 9

Create an ``||Logic:if||`` block, and drag ``||moveSMART:is counting||`` in place of _true_.

## Step 10

Next, we want the ``||variables:step||`` to increase when the program detects that the @boardname@ is shaken.
Place ``||input:on shake||`` inside the mouth of the ``||Logic:if||.

## Step 11

Add some code to increase ``||variables:step||`` by 1.
